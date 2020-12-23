import React, { Component } from 'react'
import { HeaderWrapper,Logo,Nav,NavItem} from "./style"
export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    {/* <NavItem className="left" >首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavItem className="left">登录</NavItem> */}
                </Nav>
            </HeaderWrapper>
        )
    }
}
