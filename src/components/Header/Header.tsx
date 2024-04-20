import React from 'react'
import logo from '../../logo.jpg'
import classes from './Header.module.css'

export const Header = () => <header className={classes.header}>
    <img
        // src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707235200&semt=ais"
        src={logo}
        alt="Logo"/>
</header>