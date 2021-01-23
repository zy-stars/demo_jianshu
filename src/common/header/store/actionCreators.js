import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios"

//ajax点完数据后发送的action
const changeList = (data) => {
    return {
     type: constants.CHANGE_LIST,
     data: fromJS(data),
     totalPage: Math.ceil(data.length / 10 ) //后端返回来的数据
    }
 }

export const handleInputFocus = () =>{
    return {
        type:constants.SEARCH_FOCUS
    }
    
}
export const handleInputBlur = () =>{
    return {
        type:constants.SEARCH_BLUR
    }
}

export const getList = () =>{
    return (dispatch) => {
        axios.get("/api/headerList.json").then((res)=>{
            let data = res.data;
            dispatch(changeList(data.data));
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}
export const handleMouseEnter = () =>{
    return  {
        type: constants.MOUSE_INTER
    }
}
export const handleMouseLeave = () =>{
    return  {
        type: constants.MOUSE_LEAVE
    }
}
export const handleChangePage = (page,totalPage,spin) =>{
    let originAngle = spin.style.transform.replace(/[^0-9]/ig,"");
    if(originAngle){
        originAngle = parseInt(originAngle,10);//以10进制的形式转化成整数
    }else{
        originAngle = 0;
    }
    spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
    if(page<totalPage){
        return  {
            type: constants.CHANGE_PAGE,
            page: page+1
        } 
        
    
    }else{
        return  {
            type: constants.CHANGE_PAGE,
            page:1
        }
    }
  
}