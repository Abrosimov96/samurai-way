import React from 'react'
import classes from './Post.module.css'

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return <div className={classes.item}><img
        src="https://asset.kompas.com/crops/-QSHMGMmRvrDcDZeZbRh0wrk4NM=/0x81:466x391/750x500/data/photo/2023/11/09/654c73dbe7559.jpg"
        alt="Avatar"/>{props.message}
        <div><span>Like</span></div>
        <div>Likes: {props.likesCount}</div>
    </div>
}