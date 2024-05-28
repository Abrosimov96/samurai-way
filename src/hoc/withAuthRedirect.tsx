import {Redirect} from 'react-router-dom'
import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {RootReducerType} from '../redux/redux-store';

type MapStatePropsForRedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: RootReducerType): MapStatePropsForRedirectType => ({
    isAuth: state.authMe.isAuth,
})

export const withAuthRedirect = <T, >(Component: ComponentType<T>) => {
    class RedirectComponent extends React.Component<MapStatePropsForRedirectType> {
        render() {
            const {isAuth, ...restProps} = this.props

            if (!isAuth) return <Redirect to={'/login'}/>
            return <Component {...restProps as T}/>

        }
    }


    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}