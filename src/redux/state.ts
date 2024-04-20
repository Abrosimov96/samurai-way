import {PostPropsType} from '../components/Profile/Posts/Post/Post'
import {DialogType, MessageType} from '../components/Dialogs/Dialogs'

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: {
        messages: MessageType[]
        dialogs: DialogType[]
    }
    sidebar: {
        friends: FriendType[]
    }
}

export type ProfilePageType = {
    posts: PostPropsType[]
    newPostText: string
}

export type FriendType = {
    id: number
    name: string
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: (message: MessageType) => void
    subscribe: (observer: (state: StateType) => void) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1, message: 'Hi, how are you', likesCount: 12,
                },
                {
                    id: 2, message: 'It\'s my first post.', likesCount: 30,
                },
                {
                    id: 3, message: 'Bla.', likesCount: 50,
                },
                {
                    id: 4, message: 'Da.', likesCount: 0,
                },
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPage: {
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
        console.log('State was changed!')
    },

    getState() {
        return this._state
    },

    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },

    addPost() {
        const newPost: PostPropsType = {
            id: ++this._state.profilePage.posts.length,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    addMessage(message: MessageType) {
        this._state.dialogsPage.messages.push(message)
        this._callSubscriber(this._state)
    }
}

// window.state = state