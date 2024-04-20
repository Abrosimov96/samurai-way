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
import {Component} from 'react';
import axios from 'axios';
import {Users} from './Users'

class UserContainer extends Component<UsersPropsType, any> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            users={this.props.users}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            followUnfollow={this.props.followUnfollow} />
    }
}


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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer)