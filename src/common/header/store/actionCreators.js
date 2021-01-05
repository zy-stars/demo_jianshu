import * as constants from "./constants"

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