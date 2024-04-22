import { cruxData } from "../data/dataStore";
import { Diagram } from "./Diagram";
import styles from './Diagram.module.css';

export const typeToColor = {
    navigate_cache: 'black',
    reload: 'brown',
    restore: 'purple',
    back_forward: 'green',
    back_forward_cache: 'blue',
    prerender: 'orange',
    navigate: 'teal',
}

export const NavigationTypeDiagram = props => {
    return (
        <Diagram 
            dataList={cruxData[props.key]} 
            title={props.key}
            types={Object.entries(typeToColor).map(([key, color]) => ({
                accessor: entry => entry.navigation_types?.[key],
                color,
                })
            )}
            className={styles.none}
        />
    )
}