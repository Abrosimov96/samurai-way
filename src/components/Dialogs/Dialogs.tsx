import React, {ChangeEvent} from 'react'
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
        newMessageText: string
    }
    onSendMessage: () => void
    onChangeMessageText: (value: string) => void
}

export const Dialogs = ({state, onSendMessage, onChangeMessageText}: DialogsPropsType) => {
    const dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    const messagesElements = state.messages.map(message => <Message message={message.message}/>)


    const sendMessage = () => {
        onSendMessage()
    }

    function onNewMessageChange(e: ChangeEvent<HTMLTextAreaElement>) {
        onChangeMessageText(e.currentTarget.value)
    }

    return <>
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElements}</div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea
                    value={state.newMessageText}
                    onChange={e => onNewMessageChange(e)}
                />
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>

    </>
}