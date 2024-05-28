import React from 'react'
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {RootReducerType} from '../../redux/redux-store';
import {getUserProfile} from '../../redux/profile-reducer';
import {UserProfile} from '../../redux/store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = (30975).toString()
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile}/>
        )
    }
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}
type MapStateToPropsType = {
    userProfile: UserProfile | null
    userId: number
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    userProfile: state.profilePage.userProfile,
    userId: state.authMe.id
})
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))