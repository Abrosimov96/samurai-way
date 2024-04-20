import React from 'react'
import classes from './NavBar.module.css'
import {NavLink} from 'react-router-dom'
import {FriendType} from '../../redux/store'
import {Friend} from '../Friends/Friend'

type NavBarPropsType = {
    state: { friends: FriendType[] }
}

export const NavBar = (props: NavBarPropsType) => <nav className={classes.nav}>
    <div className={classes.item}><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></div>
    <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink></div>
    <div className={classes.item}><NavLink to="/new" activeClassName={classes.activeLink}>New</NavLink></div>
    <div className={classes.item}><NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink></div>
    <div className={classes.item}><NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink></div>
    <div>
        <h3>Friends</h3>
        <div className={classes.friends}>
            {props.state.friends.map(friend => <Friend
                key={friend.id}
                name={friend.name}
            />)}
        </div>
    </div>
</nav>