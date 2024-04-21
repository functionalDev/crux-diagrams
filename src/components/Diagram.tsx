import { For } from "solid-js"
import styles from './Diagram.module.css';


export const Diagram = props => {
    return (
        <div className={[props.className, styles.diagramWrapper].join(' ')}>
            <h2> {props.title} </h2>
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
                <For each={props.dataList} >{
                    (entry) => (
                        <div className={styles.entry}>
                            <For each={props.types} >{
                                type => (
                                    <div style={{
                                        background: type.color,
                                        height: (type.accessor(entry) * 100) + '%'}}>
                                    </div>
                                )
                            }</For>
                            <span className={styles.date}>
                                <span>
                                    {`${entry.firstDate.year}/${entry.firstDate.month}/${entry.firstDate.day}`}
                                </span>
                                <br></br>
                                <span>
                                    {props.getInfo?.(entry)}
                                </span>
                            </span>
                        </div>
                    )
                }</For>
            </div>
        </div>
    )
}