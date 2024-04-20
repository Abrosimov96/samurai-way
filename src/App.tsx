import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {NavBar} from './components/NavBar/NavBar'
import {Dialogs, MessageType} from './components/Dialogs/Dialogs'
import {Route} from 'react-router-dom'
import {Profile} from './components/Profile/Profile'
import {New} from './components/New/New'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {StateType} from './redux/state'

// const ProfileComponent = () => <Profile/>

// const DialogsComponent = () => <Dialogs/>

type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    addMessage: (message: MessageType) => void
}

export const App = ({state, addPost, updateNewPostText, addMessage}: AppPropsType) => {
    return <div className="app-wrapper">
        <Header/>
        <NavBar state={state.sidebar}/>
        <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile
                profilePage={state.profilePage}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />}/>
            <Route path="/dialogs" render={() => <Dialogs
                state={state.dialogsPage}
                addMessage={addMessage}
            />}/>
            <Route path="/new" component={New}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
        </div>
    </div>
}