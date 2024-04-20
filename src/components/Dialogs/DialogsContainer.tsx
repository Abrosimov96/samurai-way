import React from 'react'
import {addMessageAC, updateMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../storeContext';

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store: any) => {
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
                    onSendMessage={sendMessage}/>
            }
        }</StoreContext.Consumer>
}