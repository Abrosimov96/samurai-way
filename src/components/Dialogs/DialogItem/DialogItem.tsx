import classes from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import React from 'react'

type DialogItemPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id

    return <div className={classes.dialog + ' ' + classes.active}><NavLink
        to={path}>{props.name}</NavLink></div>
}