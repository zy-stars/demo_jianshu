import React, { Component } from 'react'
import { Provider } from "react-redux"
import { BrowserRouter ,Route } from "react-router-dom"
import { Globalstyle } from './style.js'
import Header from "./common/header"
import { Globalstyle1 } from './statics/iconfont/iconfont.js'
import store from "./store";
import Home from "./pages/home"
import Detail from "./pages/detail/loabable.js"
import Login from "./pages/login"
import Write from "./pages/write"

export default class App extends Component {
    render() {
        return (
            <div className="cell">
                <Globalstyle/>
                <Globalstyle1/>
                <Provider store={store}>
                    <BrowserRouter>
                    <div>
                        <Header/>
                         <Route path="/" exact component={Home}/>
                         <Route path="/detail/:id" exact component={Detail}/>
                         <Route path='/login' component={Login}/>
                         <Route path='/write' component={Write}/>
                    </div>      
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}
