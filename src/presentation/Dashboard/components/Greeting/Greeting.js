import React from 'react'
// Styles
import styles from './Greeting.module.css'
// Icons
import helloIcon from './icons/hello.png'

function Greeting() {
    return (
        <div className={'d-flex justify-between container '+ styles.greeting}>
            <div>
                <div className={styles.greeting_name}>
                    <h2>
                        <span className="h2">Welcome, </span>
                        <span className="h2">John</span>
                    </h2>
                </div>
                <p className={"text-opacity no-margin "+ styles.greeting_blurb}>Check your balance, transactions, statistics and more</p>
            </div>
            <img src={helloIcon} alt="" width="auto" heigh="auto" />
        </div>
    )
}

export default Greeting
