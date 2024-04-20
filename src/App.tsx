import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {NavBar} from './components/NavBar/NavBar'
import {Route} from 'react-router-dom'
import {Profile} from './components/Profile/Profile'
import {New} from './components/New/New'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

export const App = () => {
    return <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile/>}/>
            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
            <Route path="/new" component={New}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
        </div>
    </div>
}