export type AuthDataType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}
export type ResponseType<D = {}> = {
    data: D
    resultCode: number
    messages: string[]
}


const initialState: AuthDataType = {
    id: 1,
    email: 'aaa@ss.ru',
    login: 'Viper',
    isAuth: false
}
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

