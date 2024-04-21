import { For } from "solid-js";
import { Diagram } from "../components/Diagram";
import { homepageUrls } from "../data/sampleUrls";
import { Metric } from "../enums/cwv";
import styles from './DeviceTypePage.module.css';
import { langToCode } from "../data/languages";
import { DeviceTypeDiagram, colors } from "../components/DeviceTypeDiagram";

export const DeviceTypePage = () => {
    return (
        <>
            <h1>Devices</h1>
            <h4>
                <For each={Object.entries(colors)}>
                    {
                        ([ key, color]) => (
                            <span class={styles.legendEntry}><div style={{ background: color}}></div>{key}</span>
                        )
                    }
                </For>
            </h4>
            <div class={styles.deviceTypePage}>
                <For each={Object.values(langToCode)}>
                    {
                        (langCode) => (
                            <DeviceTypeDiagram
                                key={langCode}/>
                        )
                    }
            </For>
            </div>
        </>
    );
};