import {FriendType} from './store';

export type SidebarType = {
    friends: FriendType[]
}

const initialState: SidebarType = {
    friends: [
        {id: 1, name: 'Sveta'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Valera'},
    ],
}

export const sidebarReducer = (state: SidebarType = initialState, action: any): SidebarType => {
    switch (action.type) {
        default:
            return state
    }
}
