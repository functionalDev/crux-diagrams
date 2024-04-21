import { For, createEffect } from "solid-js"
import { cruxData } from "../data/dataStore";
import styles from './Diagram.module.css';
import { CoreWebVitalRanking, Metric, getCvwRanking } from "../enums/cwv";
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

export const Diagram = props => {
    return (
        <div className={[styles.diagramWrapper, getClassName(props.key, props.metric)].join(' ')}>
            <h2> {props.title ||  props.key} </h2>
            <h6> {props.subtitle} </h6>
            <div className={styles.diagram}>
                <div className={styles.axe}>
                    <For each={[0.25,0.5,0.75, 1].reverse()}>
                        {(number) => (
                            <div className={styles.axeStep}>
                                <span>{number*100}%</span>
                            </div>
                        )}
                    </For>
                </div>
                <For each={cruxData[props.key]} >{
                    (entry) => (
                        <div className={styles.entry}>
                            <div style={{height: (entry[props.metric].poor * 100) + '%'}} className={styles.poor}></div>
                            <div style={{height: (entry[props.metric].ni * 100) + '%'}} className={styles.ni}></div>
                            <div style={{height: (entry[props.metric].good * 100) + '%'}} className={styles.good} ></div>
                            <span className={styles.date}>
                                <span>
                                    {`${entry.firstDate.year}/${entry.firstDate.month}/${entry.firstDate.day}`}
                                </span>
                                <br></br>
                                <span>
                                    {entry[props.metric].p75s}ms
                                </span>
                            </span>
                        </div>
                    )
                }</For>
            </div>
        </div>
    )
}