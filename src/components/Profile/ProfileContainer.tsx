import React from 'react'
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootReducerType} from '../../redux/redux-store';
import {setUserProfileAC} from '../../redux/profile-reducer';
import {UserProfile} from '../../redux/store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType, any>{

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : ''}`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile} />
        )
    }
}

type MapDispatchToPropsType = {
    setUserProfileAC: (profile: UserProfile) => void
}
type MapStateToPropsType = {
    userProfile: UserProfile
}

const mapStateToProps = (state: RootReducerType):MapStateToPropsType => ({
    userProfile: state.profilePage.userProfile
})
type PathParamsType ={
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
const WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileAC})(WithURLDataContainerComponent)