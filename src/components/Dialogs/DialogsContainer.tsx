import {addMessageAC, updateMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootReducerType} from '../../redux/redux-store';
import {DialogsPage} from '../../redux/store';
import {Dispatch} from 'redux';

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

type MapStateToPropsType = {
    dialogsPage: DialogsPage
}
type MapDispatchToPropsType = {
    onChangeMessageText: (text: string) => void
    onSendMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangeMessageText: (text: string) => {
            const action = updateMessageAC(text)
            dispatch(action)
        },
        onSendMessage: () => {
            const action = addMessageAC()
            dispatch(action)
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)