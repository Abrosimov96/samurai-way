import React, {ChangeEvent} from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {ActionType} from '../../redux/state';
import {addMessageAC, updateMessageAC} from '../../redux/dialogs-reducer';

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
    dispatch: (action: ActionType) => void
}

export const Dialogs = ({state, dispatch}: DialogsPropsType) => {
    const dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    const messagesElements = state.messages.map(message => <Message message={message.message}/>)


    const sendMessage = () => {
        const action = addMessageAC()
        dispatch(action)
    }

    function onNewMessageChange(e: ChangeEvent<HTMLTextAreaElement>) {
        const action = updateMessageAC(e.currentTarget.value)
        dispatch(action)
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