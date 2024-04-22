import { For } from "solid-js";
import { Diagram } from "../components/Diagram";
import { homepageUrls } from "../data/sampleUrls";
import { Metric } from "../enums/cwv";
import styles from './DeviceTypePage.module.css';
import { langToCode } from "../data/languages";
import { NavigationTypeDiagram, typeToColor } from "../components/NavigationTypeDiagram";

export const NavigationTypePage = () => {
    return (
        <>
            <h1>Navigations</h1>
            <h4>
                <For each={Object.entries(typeToColor)}>
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
                            <NavigationTypeDiagram
                                key={langCode}/>
                        )
                    }
            </For>
            </div>
        </>
    );
};