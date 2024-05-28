import React from 'react'
import {Header} from './Header';
import {RootReducerType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {authMe} from '../../redux/auth-reducer';

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {
    async componentDidMount() {
        this.props.authMe()
    }

    render() {
        return <Header {...this.props} />
    }
}

type MapDispatchToPropsType = {
    authMe: () => void
}
type MapStateToPropsType = {
    isAuth: boolean
    login: string
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    isAuth: state.authMe.isAuth,
    login: state.authMe.login
})

export const HeadersContainer = connect(mapStateToProps, {authMe})(HeaderContainer)