import React, { Component } from 'react'
import { connect } from "react-redux";
import { TopicWrapper,
         TopicItem
} from "../style"

class Topic extends Component {
    render() {
        let { list } = this.props
        return (
            <TopicWrapper>
                {
                       list.map(item => {
                        return (
                            <TopicItem key={item.get('id')}>
                            <img className="topic-pic" src={item.get('imgUrl')}/>
                            {item.get("title")}
                            </TopicItem>
                        )
                    })
                }      
            </TopicWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("topic中接收的state",state);
    return {
        list: state.get("home").get("topicList"),
    }
}
export default connect(mapStateToProps)(Topic)