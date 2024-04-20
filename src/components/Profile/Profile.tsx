import React from 'react'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {PostsContainer} from './Posts/PostsContainer';

type ProfilePropsType = {
    store: any
}

export const Profile = ({store}: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        <PostsContainer
            store={store}
        />
    </div>
}