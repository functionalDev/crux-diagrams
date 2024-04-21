import { For, createEffect } from "solid-js"
import { cruxData } from "../data/dataStore";
import styles from './Diagram.module.css';
import { CoreWebVitalRanking, Metric, getCvwRanking } from "../enums/cwv";
import { Diagram } from "./Diagram";
createEffect(() => {
    console.log(cruxData)
})
const getClassName = (key: string, metric: Metric) => {
    if(!cruxData[key]) return '';
    
    const [lastEntry] = cruxData[key].slice(-1);
    const ranking = getCvwRanking(metric)(lastEntry[metric].p75s);
    if(ranking === CoreWebVitalRanking.GOOD){ return styles.good }
    if(ranking === CoreWebVitalRanking.NEEDS_IMPROVEMENT){ return styles.ni }
    if(ranking === CoreWebVitalRanking.POOR){ return styles.poor }
    return ''
}

export const CvwDiagram = props => {
    return (
        <Diagram 
            dataList={cruxData[props.key]} 
            title={props.title}
            types={[
                {
                    accessor: entry => entry[props.metric].poor,
                    color: '#d63e35',
                },
                {
                    accessor: entry => entry[props.metric].ni,
                    color: '#f5a208',
                },
                {
                    accessor: entry => entry[props.metric].good,
                    color: '#4ba77e',
                },
            ]}
            getInfo={entry => `${entry[props.metric].p75s}ms`}
            className={getClassName(props.key, props.metric)}/>
    )
}