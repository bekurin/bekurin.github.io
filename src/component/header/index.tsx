import {useState} from 'react'
import { Button } from 'primereact/button';
import styles from './Header.module.css'
import headerLogo from '../../asset/header.png'

const Header = () => {
    const [isSignIn, setIsSignIn] = useState(false)

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={headerLogo} alt='logo'/>
            </div>
            <div>
                {isSignIn ? (
                    <Button size='small' label='로그아웃' onClick={toggleSignIn} />
                ) : (
                    <Button size='small' label='로그인' onClick={toggleSignIn} />
                )}
            </div>
        </header>
    )
}

export default Header