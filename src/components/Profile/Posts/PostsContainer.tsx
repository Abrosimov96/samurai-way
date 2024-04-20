import {PostPropsType} from './Post/Post'
import {addPostAC, updatePostAC} from '../../../redux/profile-reducer';
import {Posts} from './Posts';
import {connect} from 'react-redux';
import {RootReducerType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

export type PostsType = PostPropsType[]

type MapStateToPropsType = {
    posts: PostsType
    newPostText: string
}
type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addNewPost: () => void
}
export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewPost: () => {
            const action = addPostAC()
            dispatch(action)
        },
        updateNewPostText: (text: string) => {
            const action = updatePostAC(text)
            dispatch(action)
        }
    }
}
export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)