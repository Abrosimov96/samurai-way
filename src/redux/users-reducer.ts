
export type UsersActionType = FollowUnfollowACType | setUsersACType

export type UserType = {
    id: number
    photoUrl: string
    fullName: string
    followed: boolean
    status: string
    location: {
        city: string
        country: string
    }
}

export type UsersStateType = {
    users: UserType[]
}


const initialState: UsersStateType =  {
        users: []
    }

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW':
            return {
                ...state,
                users: state.users
                    .map(user => user.id === action.userId ? {...user, followed: !user.followed} : user)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

type FollowUnfollowACType = ReturnType<typeof followUnfollowAC>
export const followUnfollowAC = (userId: number) => {
    return {
        type: 'FOLLOW-UNFOLLOW',
        userId
    } as const
}

type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}



// type UnfollowAC = ReturnType<typeof unfollowAC>
// export const unfollowAC = (userId: number) => {
//     return {
//         type: 'UNFOLLOW',
//         userId
//     } as const
// }