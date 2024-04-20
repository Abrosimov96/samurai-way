import {DialogsPage, store} from './state';

export type DialogsActionType = AddMessageACType | UpdateMessageACType

export const dialogsReducer = (state: DialogsPage, action: DialogsActionType): DialogsPage => {
    switch (action.type) {
        case 'UPDATE-MESSAGE-TEXT': {
            return {...state, newMessageText: action.newMessageText}
        }
        case 'ADD-MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, action.newMessage],
                newMessageText: ''
            }
        }
        default:
            return state
    }
}

type AddMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
        newMessage: {
            id: new Date().getTime(),
            message: store.getState().dialogsPage.newMessageText
        }
    } as const
}

type UpdateMessageACType = ReturnType<typeof updateMessageAC>
export const updateMessageAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        newMessageText
    } as const
}