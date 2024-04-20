import {FriendType} from '../../redux/store';
import {RootReducerType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {NavBar} from './NavBar';

type MapStateToPropsType = {
    friends: FriendType[]
}
type MapDispatchToPropsType = {}
export type NavBarPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        friends: state.sidebar.friends
    }
}
const mapDispatchToProps = (): MapDispatchToPropsType => {
    return {}
}
export const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)

