import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Route} from 'react-router-dom'
import {Profile} from './components/Profile/Profile'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavBarContainer} from './components/NavBar/NavBarContainer';
import {News} from './components/News/News';
import {UsersContainer} from './components/Users/UsersContainer';

export const App = () => {
    return <div className="app-wrapper">
        <Header/>
        <NavBarContainer/>
        <div className="app-wrapper-content">
            <Route path="/profile" component={Profile}/>
            <Route path="/dialogs" component={DialogsContainer}/>
            <Route path="/users" component={UsersContainer}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
        </div>
    </div>
}