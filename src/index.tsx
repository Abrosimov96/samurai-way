import {store} from './redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './App'
import {BrowserRouter} from 'react-router-dom'

export const rerenderEntireTree = () => ReactDOM.render(<BrowserRouter>
    <App store={store}/>
</BrowserRouter>, document.getElementById('customRoot'))

rerenderEntireTree()

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