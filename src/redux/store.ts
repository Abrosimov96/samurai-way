import {PostPropsType} from '../components/Profile/Posts/Post/Post'
import {DialogType, MessageType} from '../components/Dialogs/Dialogs'
import {ProfileActionType, profileReducer} from './profile-reducer';
import {DialogsActionType, dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

export type ProfilePageType = {
    posts: PostPropsType[]
    newPostText: string
}
export type DialogsPage = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageText: string
}
export type SidebarType = {
    friends: FriendType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
    sidebar: SidebarType
}

export type FriendType = {
    id: number
    name: string
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = ProfileActionType | DialogsActionType

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12,},
                {id: 2, message: 'It\'s my first post.', likesCount: 30,},
                {id: 3, message: 'Bla.', likesCount: 50,},
                {id: 4, message: 'Da.', likesCount: 0,},
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych',},
                {id: 2, name: 'Andrew',},
                {id: 3, name: 'Sveta',},
                {id: 4, name: 'Sasha',
                },
                {id: 5, name: 'Valera',},
                {id: 6, name: 'Viktor',},
            ],
            messages: [
                {id: 1, message: 'Hi',},
                {id: 2, message: 'How is your it kamasutra',},
                {id: 3, message: 'Yo',},
                {id: 4, message: 'Yo',},
                {id: 5, message: 'Yo',},
                {id: 6, message: 'Yo',},
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Sveta'},
                {id: 2, name: 'Dimych'},
                {id: 3, name: 'Valera'},
            ],
        },
    } as StateType,
    _callSubscriber(state: StateType) {
        console.log('State was changed!', state)
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action as ProfileActionType)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as DialogsActionType)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}


// window.state = state