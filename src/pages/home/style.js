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
    width:240px;
`;
//Topic的样式
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-let: -10px;
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