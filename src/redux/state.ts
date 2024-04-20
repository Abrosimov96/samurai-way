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
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionType) => void
}

export type ActionAddPostType = {
    type: 'ADD-POST'
}
export type ActionUpdatePostType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ActionAddMessageType = {
    type: 'ADD-MESSAGE'
    newMessage: {
        id: number,
        message: string
    }
}

export type ActionType = ActionAddPostType | ActionUpdatePostType | ActionAddMessageType

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
        console.log('State was changed!', state)
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {
        switch (action.type) {
            case 'ADD-POST': {
                const newPost: PostPropsType = {
                    id: ++this._state.profilePage.posts.length,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0,
                }

                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)
                break
            }
            case 'UPDATE-NEW-POST-TEXT': {
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)
                break
            }
            case 'ADD-MESSAGE': {
                this._state.dialogsPage.messages.push(action.newMessage)
                this._callSubscriber(this._state)
                break
            }
            default:
                return this._state
        }
    }
}

export const addPostAC = (): ActionAddPostType => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updatePostAC = (newText: string): ActionUpdatePostType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}

// window.state = state