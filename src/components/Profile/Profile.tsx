import React from 'react'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileContainerPropsType} from './ProfileContainer';

export const Profile = (props: ProfileContainerPropsType) => {

    return <div>
        <ProfileInfo userProfile={props.userProfile} />
        <PostsContainer/>
    </div>
}