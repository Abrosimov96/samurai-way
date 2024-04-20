import React from 'react'
import classes from './Posts.module.css'
import {Post, PostPropsType} from './Post/Post'
import {PostsPropsType} from './PostsContainer';

export type PostsType = PostPropsType[]


export const Posts = ({posts,newPostText, updateNewPostText, addNewPost}: PostsPropsType) => {
    const postsElements = posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPosts = () => {
        addNewPost()
    }
    const onPostChange = () => {
        if (newPostElement.current?.value) {
            updateNewPostText(newPostElement.current.value)
        }
    }

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