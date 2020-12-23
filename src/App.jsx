import React, { Component } from 'react'
import { Globalstyle } from './style.js'
import Header from "./common/header"
export default class App extends Component {
    render() {
        return (
            <div className="cell">
                <Globalstyle/>
                <Header/>
            </div>
        )
    }
}
