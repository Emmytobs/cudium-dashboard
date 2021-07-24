import React from 'react'
// Styles
import styles from './Header.module.css';
// Icons
import logo from '../../assets/icons/logo.png'
import notification from '../../assets/icons/notification.png'
import profile from '../../assets/icons/profile.png'

function Header() {
    return (
        <header className={'d-flex justify-between '+ styles.header}>
            <div className={styles.header_logo}>
                <img src={logo} alt="Cudium logo" width="90%" height="auto" />
            </div>

            <div className={'d-flex justify-between '+ styles.header_profile_container}>
                <img src={notification} alt="Notification" width="auto" height="auto" className="d-block" />
                <img src={profile} alt="Profile" width="auto" height="auto" className="d-block" />
            </div>
        </header>
    )
}

export default Header
