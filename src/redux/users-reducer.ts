import {Dispatch} from 'redux';
import {userAPI} from '../api/api';

export type UsersActionType =
    FollowUnfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setUsersCountACType
    | isFetchingACType
    | FollowingInProgressACType

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
    followingInProgress: number[]
}


const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        case 'FOLLOWING-IN-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}

type FollowUnfollowACType = ReturnType<typeof followUnfollow>
export const followUnfollow = (userId: number) => {
    return {
        type: 'FOLLOW-UNFOLLOW',
        userId
    } as const
}

type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
type setUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (currentPage: number) => {
    return {
        type: 'SET-USERS-COUNT',
        currentPage
    } as const
}
type isFetchingACType = ReturnType<typeof setIsFetching>
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: 'IS-FETCHING',
        isFetching
    } as const
}
type FollowingInProgressACType = ReturnType<typeof followingInProgressAC>
export const followingInProgressAC = (isFollowing: boolean, id: number) => {
    return {
        type: 'FOLLOWING-IN-PROGRESS',
        isFollowing,
        id
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) =>  {
    dispatch(setCurrentPage(currentPage))
    dispatch(setIsFetching(true))
    const {items, totalCount} = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetching(false))
    dispatch(setUsers(items))
    dispatch(setTotalUsersCount(totalCount))
}
export const followUser = (userId: number) => async (dispatch: Dispatch) =>  {
    dispatch(followingInProgressAC(true, userId))
    const {resultCode} = await userAPI.followUser(userId)
    if (resultCode === 0) {
        dispatch(followUnfollow(userId))
    }
    dispatch(followingInProgressAC(false, userId))
}
export const unfollowUser = (userId: number) => async (dispatch: Dispatch) =>  {
    dispatch(followingInProgressAC(true, userId))
    const {resultCode} = await userAPI.unfollowUser(userId)
    if (resultCode === 0) {
        dispatch(followUnfollow(userId))
    }
    dispatch(followingInProgressAC(false, userId))
}


// type UnfollowAC = ReturnType<typeof unfollowAC>
// export const unfollowAC = (userId: number) => {
//     return {
//         type: 'UNFOLLOW',
//         userId
//     } as const
// }