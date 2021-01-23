import  styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
`;
export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float:left

`;
export const HomeRight = styled.div`
    float:right;
    width:280px;
`;
//Topic的样式
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-let: -10px;
    border-bottom: 1px solid #bcbcbc;
`
export const TopicItem = styled.div`
    float: left;
    margin:0 0 18px 18px;
    background: #f7f7f7;
    padding-right: 10px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    .topic-pic{
        margin-right: 10px;
        float:left;
        width: 32px;
        height: 32px;
        background:#ccc;
    }
`
//文章标题和内容
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display:block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`;
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color:#999;
    }
`;
// 左介绍
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background:url(${(props)=>props.imgUrl});
    background-size: contain;
    `;
//作者
export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    height: 300px;
    line-height: 300px;
    border-radius: 3px;
    text-align: center;
`
//更多内容
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height:40px;
    margin: 30px 0;
    text-align: center;
    color:#fff;
    border-radius: 20px;
    background-color: #a5a5a5;
    cursor:pointer;
`//回到顶部
export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 12px;
`