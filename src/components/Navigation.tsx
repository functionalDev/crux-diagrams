
import { Show, createSignal } from 'solid-js';
import { Metric } from '../enums/cwv';
import styles from './Navigation.module.css';

export const Navigation = () => {
    const [isOpen, setIsOpen] = createSignal(false);
    return (
    <nav class={styles.nav}>
        <div  class={styles.burgerButton} onClick={() => setIsOpen(state => !state)}>
            🍔
        </div>
        <Show when={isOpen()}>
            <ul  class={styles.sidebar}>
                <li><a href={`/metric/${Metric.TTFB}`}>TTFB</a></li>
                <li><a href={`/metric/${Metric.LCP}`}>LCP</a></li>
                <li><a href={`/metric/${Metric.INP}`}>INP</a></li>
                <li><a href="/competition">Competition</a></li>
            </ul>
        </Show>
    </nav>
)
}