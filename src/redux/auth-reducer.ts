import {Dispatch} from 'redux';
import {authMeAPI} from '../api/api';

export type AuthDataType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

const initialState = {} as AuthDataType
type AuthActionType = AuthMeACType
export const authReducer = (state: AuthDataType = initialState, action: AuthActionType): AuthDataType => {
    switch (action.type) {
        case 'AUTH-ME': {
            return {
                ...state,
                ...action.me,
                isAuth: true
            }
        }
        default:
            return state
    }
}

type AuthMeACType = ReturnType<typeof authMeAC>
export const authMeAC = (me: AuthDataType) => {
    return {
        type: 'AUTH-ME',
        me
    } as const
}

export const authMe = () => async (dispatch: Dispatch) => {
    const {resultCode, data} = await authMeAPI.authMeResponse()
    if (resultCode === 0) {
        dispatch(authMeAC({...data, isAuth: true}))
    }
}
