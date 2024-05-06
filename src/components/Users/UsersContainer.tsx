import {connect} from 'react-redux';
import {RootReducerType} from '../../redux/redux-store';
import {
    followUnfollow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    UsersStateType,
    UserType
} from '../../redux/users-reducer';
import {Component} from 'react';
import {Users} from './Users'
import {Loader} from '../common/Loader/Loader';
import {userAPI} from '../../api/api';

class UserContainer extends Component<UsersPropsType, any> {
    async componentDidMount() {
        this.props.setIsFetching(true)
        const {items, totalCount} = await userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        this.props.setIsFetching(false)
        this.props.setUsers(items)
        this.props.setTotalUsersCount(totalCount)
    }

    onPageChanged = async (page: number) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        const {items} = await userAPI.getUsers(page, this.props.pageSize)
        this.props.setIsFetching(false)
        this.props.setUsers(items)
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
                        followUnfollow={this.props.followUnfollow}/>
            }
        </>
    }
}


type MapDispatchToPropsType = {
    followUnfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (usersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = UsersStateType & MapDispatchToPropsType

function mapStateToProps(state: RootReducerType): UsersStateType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export const UsersContainer = connect(mapStateToProps, {
    followUnfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
})(UserContainer)