import React, { Component } from 'react'
import Topic from "./components/Topic"
import List from "./components/List"
import Recommed from "./components/Recommed"
import Writer from "./components/writer"

import { HomeWrapper ,         
    HomeLeft,
    HomeRight
} from './style'
export default class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Topic/>
                    <List/>   
                </HomeLeft>

                
                <HomeRight>
                    <Recommed/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}
