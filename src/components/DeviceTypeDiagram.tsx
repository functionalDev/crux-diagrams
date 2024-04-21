import { cruxData } from "../data/dataStore";
import { Diagram } from "./Diagram";
import styles from './Diagram.module.css';

export const colors = {
    tablet: '#f5a208',
    desktop: 'teal',
    phone: 'purple',
}

export const DeviceTypeDiagram = props => {
    return (
        <Diagram 
            dataList={cruxData[props.key]} 
            title={props.key}
            types={[
                {
                    accessor: entry => entry.form_factors?.tablet,
                    color: colors.tablet,
                },
                {
                    accessor: entry => entry.form_factors?.desktop,
                    color: colors.desktop,
                },
                {
                    accessor: entry => entry.form_factors?.phone,
                    color: colors.phone,
                },
            ]}
            className={styles.none}
        />
    )
}