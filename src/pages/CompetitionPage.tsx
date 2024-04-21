import { For } from "solid-js";
import { Diagram } from "../components/Diagram";
import { competitionHomepageUrls } from "../data/sampleUrls";
import { Metric } from "../enums/cwv";
import styles from './CompetitionPage.module.css';
import { CvwDiagram } from "../components/CvwDiagram";

export const CompetitionPage = () => {
    return (
        <div class={styles.competitionPage}>
            <h1>Competition</h1>
            <h4>all pages (origin)</h4>
            <For each={Object.entries(competitionHomepageUrls)}>
                {
                    ([key, url]) => (
                        <div class={styles.lane}>
                            <div>
                                <h2>{key}
                                </h2>
                                <h6><a href={url}>{url}</a></h6>
                            
                            </div>
                            <CvwDiagram title="LCP" key={key} metric={Metric.LCP}></CvwDiagram>
                            <CvwDiagram title="INP" key={key} metric={Metric.INP}></CvwDiagram>
                            <CvwDiagram title="TTFB" key={key} metric={Metric.TTFB}></CvwDiagram>
                            <CvwDiagram title="CLS" key={key} metric={Metric.CLS}></CvwDiagram>
                        </div>
                    )
                }
            </For>
        </div>
    );
};