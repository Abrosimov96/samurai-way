import {connect} from 'react-redux';
import {RootReducerType} from '../../redux/redux-store';
import {
    followingInProgressAC,
    followUnfollow,
    followUser,
    getUsers,
    setCurrentPage,
    unfollowUser,
    UsersStateType
} from '../../redux/users-reducer';
import {Component} from 'react';
import {Users} from './Users'
import {Loader} from '../common/Loader/Loader';

class UserContainer extends Component<UsersPropsType, any> {
    async componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = async (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return <>
            {
                this.props.isFetching
                    ? <Loader/>
                    : <Users
                        totalUsersCount={this.props.totalUsersCount}
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        followingInProgress={this.props.followingInProgress}
                        followUser={this.props.followUser}
                        unfollowUser={this.props.unfollowUser}
                    />

            }
        </>
    }
}


type MapDispatchToPropsType = {
    followUnfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    followingInProgressAC: (isFollowing: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}
export type UsersPropsType = UsersStateType & MapDispatchToPropsType

function mapStateToProps(state: RootReducerType): UsersStateType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    followUnfollow,
    setCurrentPage,
    followingInProgressAC,
    getUsers,
    followUser,
    unfollowUser
})(UserContainer)