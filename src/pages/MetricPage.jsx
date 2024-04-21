import { For } from 'solid-js';
import styles from './MetricPage.module.css';
import { Diagram } from '../components/Diagram';
import { langToCode } from '../data/languages';
import { homepageUrls } from '../data/sampleUrls';

function MetricPage(props) {
  return (
    <div className={styles.metricPageShell}>
      <h1>{props.params.metric}</h1>
      <h4>language home pages</h4>
      <div class={styles.metricPage}>
        <For each={Object.values(langToCode)}>
          {
            (langCode) => (
              <Diagram
                metric={props.params.metric} 
                key={langCode}/>
            )
          }
        </For>
      </div>
    </div>
  );
}

export default MetricPage;
