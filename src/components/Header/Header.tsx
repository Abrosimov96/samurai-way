import React from 'react'
import logo from '../../logo.jpg'
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from './HeaderContainer';

export const Header = (props: any) => <header className={classes.header}>
    <img
        // src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707235200&semt=ais"
        src={logo}
        alt="Logo"/>
    <div className={classes.loginBlock}>
        {
            props.isAuth ? props.login
                : <NavLink to={'/login'}>
                    Login
                </NavLink>
        }

    </div>
</header>