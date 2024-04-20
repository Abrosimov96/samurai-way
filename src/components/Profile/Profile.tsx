import React from 'react'
import {Posts} from './Posts/Posts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {ActionType, ProfilePageType} from '../../redux/state'

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const Profile = ({profilePage, dispatch}: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        <Posts
            posts={profilePage.posts}
            newPostText={profilePage.newPostText}
            dispatch={dispatch}
        />
    </div>
}