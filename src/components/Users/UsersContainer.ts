import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootReducerType} from '../../redux/redux-store';
import {
    followUnfollowAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersCountAC,
    UsersStateType,
    UserType
} from '../../redux/users-reducer';
import {User} from './Users';

type MapDispatchToPropsType = {
    followUnfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (usersCount: number) => void
}
export type UsersPropsType = UsersStateType & MapDispatchToPropsType
function mapStateToProps(state: RootReducerType): UsersStateType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
    return {
        followUnfollow: (userId: number) => {
            dispatch(followUnfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (usersCount: number) => {
            dispatch(setUsersCountAC(usersCount))
        }
    }
}

export const UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(User)