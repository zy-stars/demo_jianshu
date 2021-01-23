import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import Topic from "./components/Topic"
import List from "./components/List"
import Recommed from "./components/Recommed"
import Writer from "./components/writer"
import { actionCreators } from "./store"

import { HomeWrapper ,         
    HomeLeft,
    HomeRight,
    BackTop
} from './style'
 class Home extends PureComponent {

    handleScrollTop(){
        window.scrollTo(0,0)
    }
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
                {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>顶部</BackTop>:null}
                
            </HomeWrapper>
        )
    }
    componentDidMount(){
      this.props.changeHomeData();
      this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.props.changeScorllTopShow)
    }
    bindEvents(){
        window.addEventListener("scroll",this.props.changeScorllTopShow)
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        showScroll: state.getIn(["home",'showScroll'])
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeHomeData: () => {
            const action = actionCreators.getHomeInfo();
            dispatch(action);
        },
        changeScorllTopShow(){
            // console.log(document.documentElement.scrollTop)
            if(document.documentElement.scrollTop > 100){
                dispatch(actionCreators.toggleTopShow(true))
            }else{
                dispatch(actionCreators.toggleTopShow(false));
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(Home);
