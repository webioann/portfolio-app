const SHOW_LIST = "SHOW_LIST";

const showListReducer = (state = {showList : ""},action) => {
    switch (action.type) {
        case SHOW_LIST:
            return {...state,showList: 'animation-name : growList'}
        default: 
            return state
    }
}
export const showListAction = (payload) => ({type:SHOW_LIST, payload})

export default showListReducer;