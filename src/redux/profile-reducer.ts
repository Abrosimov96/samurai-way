import {ProfilePageType} from './store';
import {PostPropsType} from '../components/Profile/Posts/Post/Post';

export type ProfileActionType = AddPostACType | UpdatePostACType



const initialState: ProfilePageType =  {
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
    }

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostPropsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }
}

type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

type UpdatePostACType = ReturnType<typeof updatePostAC>
export const updatePostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}