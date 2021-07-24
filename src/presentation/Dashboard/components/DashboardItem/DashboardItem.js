import React from 'react'

import styles from './DashboardItem.module.css';

function DashboardItem(props) {
    return (
        <div className={'container '+ styles.container}>
            <div>
                <h4 className={"font-weight-300 "+ styles.title}>{props.title}</h4>
                <p className="text-opacity">{props.description}</p>
            </div>
            <button className={styles.button}>{props.buttonText}</button>
            <img className={styles.icon} src={props.icon} alt="" />
        </div>
    )
}

export default DashboardItem
