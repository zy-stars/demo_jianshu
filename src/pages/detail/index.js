import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Details, DetailWrapper,Header, Content } from './style';
import { actionCreators } from "./store" ;
 class Detail extends PureComponent {
    render() {
        let { title,content} = this.props
        return ( 
            <Details>  
            <DetailWrapper>
                <Header>
                    {title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html:content}}/>
            </DetailWrapper></Details> 
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        title: state.getIn(['detail','title']),
        content: state.getIn(['detail','content']),
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDetail: (id) => {
            dispatch(actionCreators.getDetail(id))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));