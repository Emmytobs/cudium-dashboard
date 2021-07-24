import React from 'react'

import styles from './Dashboard.module.css'
// Local components
import Greeting from './components/Greeting/Greeting'

import Sidebar from '../../shared/application/components/Sidebar/Sidebar'
import Balance from './components/Balance/Balance'
import LatestTransactions from './components/LatestTransactions/LatestTransactions'
import DashboardItem from './components/DashboardItem/DashboardItem'

import p2pIcon from './icons/p2p.png'
import depositIcon from './icons/deposit-ngn.png'


function Dashboard() {
    return (
        <>
        <Sidebar />
        <div className={styles.dashboard}>
            <Greeting />
            <div className={styles.grid_block}>
                <div className={styles.grid_block_col_one}>
                    <Balance />
                    <DashboardItem 
                        title="P2P Trading"
                        description="Buy and Sell RMB in the market"
                        icon={p2pIcon}
                        buttonText="Start Trading"
                    />
                    <DashboardItem 
                        title="Deposit NGN"
                        description="Bank Transfer"
                        icon={depositIcon}
                        buttonText="Deposit"
                    />
                </div>
                <div className={styles.grid_block_col_two}>
                    <LatestTransactions />
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard
