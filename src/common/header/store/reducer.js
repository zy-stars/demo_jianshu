import * as constants from "./constants"
import { fromJS } from "immutable"
const defaultState = fromJS({
    focused: false
});

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.SEARCH_FOCUS:
            //immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
            return state.set("focused",true);
        case constants.SEARCH_BLUR:
            return state.set("focused",false);
        default:
            return state;
    }
     
}