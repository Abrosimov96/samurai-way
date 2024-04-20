import {ProfilePageType} from './state';
import {PostPropsType} from '../components/Profile/Posts/Post/Post';

export type ProfileActionType = AddPostACType | UpdatePostACType

export const profileReducer = (state: ProfilePageType, action: ProfileActionType): ProfilePageType => {
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