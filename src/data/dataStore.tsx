import { createStore } from 'solid-js/store';
import { getData } from './cruxFetcher';
import { langToCode } from './languages';
import { competitionHomepageUrls, homepageUrls } from './sampleUrls';
import { sampleUrls } from './sampleUrls copy';

export const [cruxData, setCruxData] = createStore({});

Object.values(langToCode).forEach(langCode => {
    const url = homepageUrls[langCode];
    getData({ url }).then(data => setNormalizedData(langCode, data))
});

Object.entries(competitionHomepageUrls).forEach(([name, url]) => {
    getData({ origin: url }).then(data => setNormalizedData(name, data))
});

const mapHistogramTimeseries = (index: number) => ([key, value]: [string, any]) => {
    const [good, ni, poor] = value.histogramTimeseries;
    const {p75s} = value.percentilesTimeseries;
    return [key, {
        good: good.densities[index],
        ni: ni.densities[index],
        poor: poor.densities[index],
        p75s: p75s[index],
    }];
};

const mapFractionTimeseries = (index: number) => ([key, value]: [string, any]) => {
    const fractionTimeseriesValue = Object.keys(value.fractionTimeseries).reduce((acc, next) => {
        return {
            ...acc,
            [next]: value.fractionTimeseries[next].fractions[index],
        }
    }, {})
    return [key, fractionTimeseriesValue];
};


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
                        .map(([key, value]) => {
                            if(Boolean(value?.histogramTimeseries)){
                                return mapHistogramTimeseries(index)([key, value]);
                            }
                            
                            if(Boolean(value?.fractionTimeseries)){
                                return mapFractionTimeseries(index)([key, value]);
                            }
                            return ['test', 'test'];
                        })
        );
        return {
            ...period,
            ...groupedByDateMetrics
        }; 
    });
    setCruxData(key, entries);
}