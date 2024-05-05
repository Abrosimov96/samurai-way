import React from 'react'
import {Header} from './Header';
import {RootReducerType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import axios from 'axios';
import {AuthDataType, authMeAC} from '../../redux/auth-reducer';

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
class HeaderContainer extends React.Component<HeaderContainerPropsType, any>{
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.authMeAC(response.data.data)
                }
            })
    }
    render() {
        return <Header {...this.props} />
    }
}

type MapDispatchToPropsType = {
    authMeAC: (me: AuthDataType) => void
}
type MapStateToPropsType = {
    isAuth: boolean
    login: string
}

const mapStateToProps = (state: RootReducerType):MapStateToPropsType => ({
    isAuth: state.authMe.isAuth,
    login: state.authMe.login
})

export const HeadersContainer = connect(mapStateToProps, {authMeAC})(HeaderContainer)