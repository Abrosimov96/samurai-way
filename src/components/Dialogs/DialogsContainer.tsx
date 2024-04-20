import React from 'react'
import {addMessageAC, updateMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

type DialogsPropsType = {
    store: any
}

export const DialogsContainer = ({store}: DialogsPropsType) => {
    const state = store.getState().dialogsPage
    const sendMessage = () => {
        const action = addMessageAC()
        store.dispatch(action)
    }

    function onNewMessageChange(text: string) {
        const action = updateMessageAC(text)
        store.dispatch(action)
    }

    return <Dialogs
        state={state}
        onChangeMessageText={onNewMessageChange}
        onSendMessage={sendMessage}  />
}