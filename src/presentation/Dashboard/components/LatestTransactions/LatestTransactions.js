import React from 'react'
// Styles
import styles from './LatestTransactions.module.css';
// Icons
// import failedTransactionIcon from './icons/failed-transaction.png'
import successfulTransactionIcon from './icons/successful-transaction.png'

function LatestTransactions() {
    return (
        <div className={'container '+ styles.latestTransactions}>
            <h4 className={"font-weight-300 " + styles.title}>Latest Transactions</h4>
            <div className={styles.transactionContainer}>

                {
                    new Array(8).fill(1).map((transaction, index) => (
                        <div key={index} className={`d-flex justify-between align-center ${styles.transaction} ${styles.transaction_completed}`}>
                            <div className={'d-flex '+ styles.transaction_status_indicator}>
                                <img src={successfulTransactionIcon} alt="" width="auto" height="auto" />
                            </div>
                            <div className={'d-flex justify-between '+ styles.transaction_details}>
                                <div className={styles.transaction_name_status}>
                                    <p>Bought RMB - 12345678</p>
                                    <small>Completed</small>
                                </div>
                                <div className={styles.transaction_currency_date}>
                                    <p>RMB 5,043</p>
                                    <small className="text-opacity">14 Feb 2021</small>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default LatestTransactions
