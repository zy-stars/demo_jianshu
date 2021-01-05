import React, { Component } from 'react'
import { Provider } from "react-redux"
import { BrowserRouter ,Route } from "react-router-dom"
import { Globalstyle } from './style.js'
import Header from "./common/header"
import { Globalstyle1 } from './statics/iconfont/iconfont.js'
import store from "./store";
import Home from "./pages/home"
import Detial from "./pages/detail"

export default class App extends Component {
    render() {
        return (
            <div className="cell">
                <Globalstyle/>
                <Globalstyle1/>
                <Provider store={store}>
                   <div>
                   <Header/>
                    <BrowserRouter>
                        <div>
                         <Route path="/" exact component={Home}/>
                         <Route path="/detial" exact component={Detial}/>
                        </div>
                    </BrowserRouter>
                   </div>
                </Provider>
            </div>
        )
    }
}
