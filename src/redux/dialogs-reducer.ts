import {DialogsPage} from './store';
import {store} from './store';

export type DialogsActionType = AddMessageACType | UpdateMessageACType


const initialState: DialogsPage = {
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
        },
        {
            id: 2,
            name: 'Andrew',
        },
        {
            id: 3,
            name: 'Sveta',
        },
        {
            id: 4,
            name: 'Sasha',
        },
        {
            id: 5,
            name: 'Valera',
        },
        {
            id: 6,
            name: 'Viktor',
        },
    ],
    messages: [
        {
            id: 1, message: 'Hi',
        },
        {
            id: 2, message: 'How is your it kamasutra',
        },
        {
            id: 3, message: 'Yo',
        },
        {
            id: 4, message: 'Yo',
        },
        {
            id: 5, message: 'Yo',
        },
        {
            id: 6, message: 'Yo',
        },
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPage = initialState, action: DialogsActionType): DialogsPage => {
    switch (action.type) {
        case 'UPDATE-MESSAGE-TEXT': {
            return {...state, newMessageText: action.newMessageText}
        }
        case 'ADD-MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, {id: action.newMessage.id, message: state.newMessageText}],
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