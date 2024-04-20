import { For } from "solid-js";
import { Diagram } from "../components/Diagram";
import { competitionHomepageUrls } from "../data/sampleUrls";
import { Metric } from "../enums/cwv";
import styles from './CompetitionPage.module.css';

export const CompetitionPage = () => {
    return (
        <div class={styles.competitionPage}>
            <h1>Competition</h1>
            <h4>language home pages</h4>
            <For each={Object.entries(competitionHomepageUrls)}>
                {
                    ([key, url]) => (
                        <div class={styles.lane}>
                            <div>
                                <h2>{key}
                                </h2>
                                <h6>{url}</h6>
                            
                            </div>
                            <Diagram title="LCP" key={key} metric={Metric.LCP}></Diagram>
                            <Diagram title="INP" key={key} metric={Metric.INP}></Diagram>
                            <Diagram title="TTFB" key={key} metric={Metric.TTFB}></Diagram>
                            <Diagram title="CLS" key={key} metric={Metric.CLS}></Diagram>
                        </div>
                    )
                }
            </For>
        </div>
    );
};