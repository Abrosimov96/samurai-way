import React from 'react'
import classes from './Posts.module.css'
import {Post, PostPropsType} from './Post/Post'

export type PostsType = PostPropsType[]

export type PostsPropsType = {
    posts: PostsType
    addPost: () => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}

export const Posts = ({posts, addPost, newPostText, updateNewPostText}: PostsPropsType) => {
    const postsElements = posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)

    const addPosts = () => {
        addPost()
    }

    const onPostChange = () => {
        if (newPostElement.current?.value) updateNewPostText(newPostElement.current?.value)
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