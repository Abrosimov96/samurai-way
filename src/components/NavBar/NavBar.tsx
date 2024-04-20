import React from 'react'
import classes from './NavBar.module.css'
import {NavLink} from 'react-router-dom'
import {FriendType} from '../../redux/store'
import {Friend} from '../Friends/Friend'
import {NavBarPropsType} from './NavBarContainer';


export const NavBar = ({friends}: NavBarPropsType) => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink
                to="/profile"
                activeClassName={classes.activeLink}>
                Profile
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink
                to="/dialogs"
                activeClassName={classes.activeLink}>
                Messages
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink
                to="/users"
                activeClassName={classes.activeLink}>
                Users
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink
                to="/news"
                activeClassName={classes.activeLink}>
                News
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink
                to="/music"
                activeClassName={classes.activeLink}>
                Music
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink
                to="/settings"
                activeClassName={classes.activeLink}>
                Settings
            </NavLink>
        </div>
        <div>
            <h3>Friends</h3>
            <div className={classes.friends}>
                {friends.map((friend: FriendType) => <Friend
                    key={friend.id}
                    name={friend.name}
                />)}
            </div>
        </div>
    </nav>
}

