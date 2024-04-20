import { Route, Router } from '@solidjs/router';
import MetricPage from './pages/MetricPage';
import { Metric } from './enums/cwv.js';
import { Navigation } from './components/Navigation';
import styles from './App.module.css';
import { CompetitionPage } from './pages/CompetitionPage';

function App() {
  return (
    <div class={styles.app}>
      <Navigation/>
      <Router>
        <Route path="/metric/:metric" component={MetricPage} />  
        <Route path="/competition" component={CompetitionPage} />      
      </Router>
    </div>
  );
}

export default App;
