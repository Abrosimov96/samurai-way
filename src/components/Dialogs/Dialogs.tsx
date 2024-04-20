import React from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

type DialogsPropsType = {
    state: {
        dialogs: DialogType[]
        messages: MessageType[]
    }
    addMessage: (message: MessageType) => void
}

export const Dialogs = ({state, addMessage}: DialogsPropsType) => {
    const dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    const messagesElements = state.messages.map(message => <Message message={message.message}/>)

    const messageRef = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        if (messageRef.current?.value) addMessage({
            id: ++state.messages.length,
            message: messageRef.current.value,
        } as MessageType)
    }

    return <>
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElements}</div>
            <div className={classes.messages}>{messagesElements}</div>
        </div>
        <textarea ref={messageRef}/>
        <button onClick={sendMessage}>Send message</button>
    </>
}