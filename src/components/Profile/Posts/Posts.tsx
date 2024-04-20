import React from 'react'
import classes from './Posts.module.css'
import {Post, PostPropsType} from './Post/Post'
import {ActionAddPostType, ActionType, ActionUpdatePostType} from '../../../redux/state';

export type PostsType = PostPropsType[]

export type PostsPropsType = {
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const Posts = ({posts, dispatch, newPostText}: PostsPropsType) => {
    const postsElements = posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)

    const addPosts = () => {
        const action: ActionAddPostType = {type: 'ADD-POST'};
        dispatch(action)
    }

    const onPostChange = () => {
        if (newPostElement.current?.value) {
            const action: ActionUpdatePostType = {type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value};
            dispatch(action)
        }
    }

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    return <div className={classes.postsBlock}><h3>My posts</h3>
        <div>
            <div><textarea ref={newPostElement} value={newPostText} onChange={onPostChange}/></div>
            <div>
                <button>Remove</button>
                <button onClick={addPosts}>Add post</button>
            </div>
        </div>
        <div className={classes.posts}>{postsElements}</div>
    </div>
}