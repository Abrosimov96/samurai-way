import React from 'react'
import {Posts} from './Posts/Posts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {ProfilePageType} from '../../redux/state'

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

export const Profile = ({profilePage, addPost, updateNewPostText}: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        <Posts
            posts={profilePage.posts}
            addPost={addPost}
            newPostText={profilePage.newPostText}
            updateNewPostText={updateNewPostText}
        />
    </div>
}