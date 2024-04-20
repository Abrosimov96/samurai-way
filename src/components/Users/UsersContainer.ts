import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootReducerType} from '../../redux/redux-store';
import {followUnfollowAC, setUsersAC, UserType} from '../../redux/users-reducer';
import {User} from './Users';

type MapStateToPropsType = {
    users: UserType[]
}
type MapDispatchToPropsType = {
    followUnfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
function mapStateToProps(state: RootReducerType): MapStateToPropsType {
    return {
        users: state.usersPage.users
    }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
    return {
        followUnfollow: (userId: number) => {
            dispatch(followUnfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(User)