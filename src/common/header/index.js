import React,{ Component } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group";
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,
    SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,
    SearchInfoItem,SearchInfoList,Button} from "./style";
import { handleInputBlur,handleInputFocus,getList,handleMouseEnter
 ,handleMouseLeave,handleChangePage} from "./store/actionCreators"
 import { logout } from "../../pages/login/store/actionCreators"
class Header extends Component {
    getListArea = () => {
        const { focused, list, page,mouseIn,totalPage,handleMouseEnter,handleMouseLeave ,handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
       if( newList.length){
        for( let i = (page-1)*10; i<page *10;i++) {
            pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
        }
       }
        if (focused || mouseIn ) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}> 
                        <span className="iconfont spin" ref={icon=>{this.spinIcon = icon}}>&#xe851;</span>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                      {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null
        }
    }
    render() {
        let {focused, handleInputFocus,handleInputBlur,getList,list,login,logout} = this.props
        return (
            <HeaderWrapper>
                <Link to='/'>
                <Logo/></Link>
                <Nav>
                    <NavItem className="left active" >首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ?<NavItem className="right" onClick={()=>{logout()}}>退出</NavItem>:
                        <Link to='/login'><NavItem className="right">登录</NavItem></Link>
                    }
                    
                    <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={200} //控制动画时长
                            in={focused}//控制出厂动画 就是true false
                            classNames='slide'>
                            <NavSearch className={focused ? "focused" : ''}
                                onFocus = {()=>handleInputFocus(list.size===0 && getList())}
                                onBlur = {()=>handleInputBlur()}
                            />
                        </CSSTransition>
                        <span className={focused ? "focused iconfont zoom" : 'iconfont zoom'}>&#xe69d;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                   
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className= "reg">
                            <span className="iconfont">&#xe724;</span>写文章
                        </Button>
                    </Link>
                    <Button className= "writting">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        focused: state.getIn(['header','focused']),
        list: state.getIn(["header","list"]),
        page: state.getIn(["header","page"]),
        mouseIn: state.getIn(["header","mouseIn"]),
        changePage: state.getIn(["header","page"]),
        totalPage: state.getIn(["header","totalPage"]),
        login: state.getIn(["login","login"])
    }
}
export default connect(mapStateToProps, { handleInputBlur,handleInputFocus,getList,handleMouseEnter,handleMouseLeave,handleChangePage,logout})(Header)