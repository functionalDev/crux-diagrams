import { createStore } from 'solid-js/store';
import { getData } from './cruxFetcher';
import { langToCode } from './languages';
import { competitionHomepageUrls, homepageUrls } from './sampleUrls';
import { sampleUrls } from './sampleUrls copy';

export const [cruxData, setCruxData] = createStore({});

Object.values(langToCode).forEach(langCode => {
    const url = homepageUrls[langCode];
    getData(url).then(data => setNormalizedData(langCode, data))
});

Object.entries(competitionHomepageUrls).forEach(([name, url]) => {
    getData(url).then(data => setNormalizedData(name, data))
});

const setNormalizedData = (key: string, data: any) => {
        const { record } = data;
        if(!record) return [];
        const {
            collectionPeriods,
            metrics,
        } = record;
        
        const entries = collectionPeriods.map((period: any, index: number) => {
            const groupedByDateMetrics = 
                Object.fromEntries(
                    Object.entries(metrics)
                        .filter(([,value]) => Boolean(value?.histogramTimeseries))
                            .map(([metricKey, value]) => {
                                const [good, ni, poor] = value.histogramTimeseries;
                                const {p75s} = value.percentilesTimeseries;
                                return [metricKey, {
                                    good: good.densities[index],
                                    ni: ni.densities[index],
                                    poor: poor.densities[index],
                                    p75s: p75s[index],
                                }];
                            })
                        );
            return {
                ...period,
                ...groupedByDateMetrics
            };
        });
        setCruxData(key, entries);
}