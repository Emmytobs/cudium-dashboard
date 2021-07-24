import React from 'react'
// Styles
import styles from './Balance.module.css'
// icons
import depositIcon from './icons/deposit.png'
import transferIcon from './icons/transfer.png'
import withdrawIcon from './icons/withdraw.png'

function Balance() {
    return (
        <div className={'container '+ styles.balance}>
            <div className={styles.balance_amount_currency}>
                <p className="text-opacity">Main Balance</p>
                <h2 className={styles.amount}>N 342,000. 00</h2>
                <p className="text-opacity">NGN</p>
            </div>
            <div className={'d-flex justify-between '+ styles.balance_actions}>
                <div className={styles.action} tabIndex={0}>
                    <img src={withdrawIcon} alt="" />
                    <p className="small-text">Withdraw</p>
                </div>
                <div className={styles.action} tabIndex={0}>
                    <img src={transferIcon} alt="" />
                    <p className="small-text">Transfer</p>
                </div>
                <div className={styles.action} tabIndex={0}>
                    <img src={depositIcon} alt="" />
                    <p className="small-text">Deposit</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
