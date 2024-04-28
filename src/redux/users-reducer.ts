export type UsersActionType =
    FollowUnfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setUsersCountACType
    | isFetchingACType

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    },
    followed: boolean
    status: string
}

export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
                users: [...action.users]
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.currentPage
            }
        case 'IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
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
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
type setUsersCountACType = ReturnType<typeof setUsersCountAC>
export const setUsersCountAC = (currentPage: number) => {
    return {
        type: 'SET-USERS-COUNT',
        currentPage
    } as const
}
type isFetchingACType = ReturnType<typeof isFetchingAC>
export const isFetchingAC = (isFetching: boolean) => {
    return {
        type: 'IS-FETCHING',
        isFetching
    } as const
}


// type UnfollowAC = ReturnType<typeof unfollowAC>
// export const unfollowAC = (userId: number) => {
//     return {
//         type: 'UNFOLLOW',
//         userId
//     } as const
// }