import { HashRouter, Navigate, Route, Router } from '@solidjs/router';
import MetricPage from './pages/MetricPage';
import { Metric } from './enums/cwv.js';
import { Navigation } from './components/Navigation';
import styles from './App.module.css';
import { CompetitionPage } from './pages/CompetitionPage';
import { DeviceTypePage } from './pages/DeviceTypePage';
import { NavigationTypePage } from './pages/NavigationTypePage';

function App() {
  return (
    <div class={styles.app}>
      <Navigation/>
      <HashRouter >
        <Route path="/" component={MetricPage} />  
        <Route path="/crux-diagrams/" component={MetricPage} />  
        <Route path="/crux-diagrams/metric/:metric" component={MetricPage} />  
        <Route path="/crux-diagrams/devicetype" component={DeviceTypePage} />  
        <Route path="/crux-diagrams/navigationtype" component={NavigationTypePage} />  
        <Route path="/crux-diagrams/competition" component={CompetitionPage} />      
      </HashRouter>
    </div>
  );
}

export default App;
