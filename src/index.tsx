import {StateType, store} from './redux/state'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './App'
import {BrowserRouter} from 'react-router-dom'

export const rerenderEntireTree = (state: StateType) => ReactDOM.render(<BrowserRouter>
    <App
        state={state}
        dispatch={store.dispatch.bind(store)}
    />
</BrowserRouter>, document.getElementById('customRoot'))

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// let page = {
//     _content: '',
//     title: '',
//     setContent(content: string) {
//         this._content = content
//     },
//     getContent() {
//         return this._content
//     },
//     render: function () {
//         document.write(this._content)
//     },
// }