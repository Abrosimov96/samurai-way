import React from 'react'
import {PostPropsType} from './Post/Post'
import {addPostAC, updatePostAC} from '../../../redux/profile-reducer';
import {Posts} from './Posts';

export type PostsType = PostPropsType[]

export type PostsPropsType = {
    store: any
}

export const PostsContainer = ({store}: PostsPropsType) => {
    const state = store.getState()
    const addPosts = () => {
        const action = addPostAC();
        store.dispatch(action)
    }
    const onPostChange = (text: string) => {
        const action = updatePostAC(text)
        store.dispatch(action)
    }

    return <Posts
        posts={state.profilePage.posts}
        updateNewPostText={onPostChange}
        addNewPost={addPosts}
        newPostText={state.profilePage.newPostText} />
}