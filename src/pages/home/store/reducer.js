import { fromJS } from "immutable"

const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'社会热点',
        imgUrl:''
    },{
        id:2,
        title:'手绘',
        imgUrl:''
    }]
});
console.log("reducer.js中的state",  defaultState );
const reducer = (state = defaultState,action) => {
    
    switch(action.type){
        default:
            return state;
    }
     
}
export default reducer;