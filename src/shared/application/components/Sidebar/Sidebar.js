import React from 'react'
// Styles
import styles from './Sidebar.module.css'
// Icons
import homeIcon from './icons/home.png'
import overviewIcon from './icons/overview.png'
import p2pIcon from './icons/P2P.png'
import messageIcon from './icons/message.png'

function Sidebar() {
    const navItemAttr = [
        {
            pageName: 'Home',
            pageIcon: homeIcon,
            active: true
        },
        {
            pageName: 'Overview',
            pageIcon: overviewIcon
        },
        {
            pageName: 'P2P',
            pageIcon: p2pIcon
        },
        {
            pageName: 'Messages',
            pageIcon: messageIcon
        },
    ]

    return (
        <nav className={styles.sidebar}>
            <div className={styles.sidebar_navItems_container}>
                {
                    navItemAttr.map(navItem => (
                        <NavItem 
                            pageIcon={navItem.pageIcon}
                            pageName={navItem.pageName}
                            active={navItem.active ? true : false}
                        />
                    ))
                }
            </div>
        </nav>
    )
}

function NavItem(props) {
    return (
        <div className={`d-flex justify-start ${styles.navItem} ${props.active ? styles.active : ''}`}>
            <div 
                className={`${styles.navItem_indicator}`}></div>
            <div className={'d-flex justify-between '+ styles.navItem_name}>
                <img src={props.pageIcon} alt="" width="24px" height="24px" />
                <p className={styles.pageName}>{props.pageName}</p>
            </div>
        </div>
    )
}

export default Sidebar
