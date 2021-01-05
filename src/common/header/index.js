import React from 'react'
import { connect } from "react-redux"
import { CSSTransition } from "react-transition-group";
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,
    SearchWrapper,
    Button} from "./style";
import { handleInputBlur,handleInputFocus} from "./store/actionCreators"

const Header = (props) =>{
    let { focused, handleInputFocus,handleInputBlur} = props
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active" >首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={200} //控制动画时长
                            in={focused}//控制出厂动画 就是true false
                            classNames='slide'>
                            <NavSearch className={focused ? "focused" : ''}
                                onFocus = {()=>handleInputFocus()}
                                onBlur = {()=>handleInputBlur()}
                            />
                        </CSSTransition>
                        <span className={focused ? "focused iconfont" : 'iconfont'}>&#xe69d;</span>
                        
                    </SearchWrapper>
                    
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                </Nav>
                <Addition>
                    <Button className= "reg">
                    <span className="iconfont">&#xe724;</span>写文章</Button>
                    <Button className= "writting">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
}
const mapStateToProps = (state, ownProps) => {
    return {
        focused: state.get("header").get("focused")
    }
}
export default connect(mapStateToProps, { handleInputBlur,handleInputFocus})(Header)