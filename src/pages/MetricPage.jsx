import { For } from 'solid-js';
import styles from './MetricPage.module.css';
import { langToCode } from '../data/languages';
import { CvwDiagram } from '../components/CvwDiagram';

const defaultMetric = 'experimental_time_to_first_byte';

function MetricPage(props) {
  return (
    <div className={styles.metricPageShell}>
      <h1>{props.params.metric || defaultMetric}</h1>
      <h4>language home pages</h4>
      <div class={styles.metricPage}>
        <For each={Object.values(langToCode)}>
          {
            (langCode) => (
              <CvwDiagram
                title={langCode}
                metric={props.params.metric || defaultMetric} 
                key={langCode}/>
            )
          }
        </For>
      </div>
    </div>
  );
}

export default MetricPage;
