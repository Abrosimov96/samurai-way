import React from 'react'
import {Header} from './Header';
import {RootReducerType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {AuthDataType, authMeAC} from '../../redux/auth-reducer';
import {authMeAPI} from '../../api/api';

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {
    async componentDidMount() {
        const {resultCode, data} = await authMeAPI.authMeResponse()
        if (resultCode === 0) {
            this.props.authMeAC({...data, isAuth: true})
        }
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

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    isAuth: state.authMe.isAuth,
    login: state.authMe.login
})

export const HeadersContainer = connect(mapStateToProps, {authMeAC})(HeaderContainer)