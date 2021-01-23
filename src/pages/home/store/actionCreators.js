import axios from "axios";
import * as constants from "./constants"
import { fromJS } from "immutable";

const changeHomeData = (result) =>({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList:result.recommendList
})
const addHomeList = (list,nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),//List 也可以,
    nextPage
})
export const getHomeInfo = ()=>{
    return (dispatch)=>{
        axios.get("/api/home.json").then(res=>{
            const result = res.data.data; 
            dispatch(changeHomeData(result));
        })   
    }
}
export const getMoreList =(page)=>{
    console.log(page)
    return (dispatch)=>{
        axios.get("/api/homeList.json?page="+page).then(res=>{
            const result = res.data.data; 
            dispatch(addHomeList(result,page + 1))
        })   
    }
}
export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})