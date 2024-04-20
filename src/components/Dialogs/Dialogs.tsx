import React from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {ActionAddMessageType, ActionType} from '../../redux/state';

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
    dispatch: (action: ActionType) => void
}

export const Dialogs = ({state, dispatch}: DialogsPropsType) => {
    const dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    const messagesElements = state.messages.map(message => <Message message={message.message}/>)

    const messageRef = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        if (messageRef.current?.value) {
            const newMessage: MessageType = {
                id: ++state.messages.length,
                message: messageRef.current.value,
            }
            const action: ActionAddMessageType = {type: 'ADD-MESSAGE', newMessage}
            dispatch(action)
            messageRef.current.value = ''
        }
    }

    return <>
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElements}</div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={messageRef}/>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>

    </>
}