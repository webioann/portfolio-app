const SHOW_MENU = "SHOW_MENU";
const CLOSE_MENU = "CLOSE_MENU";

const showMenuReducer = (state = {showMenu : "nav-bar-none"},action) => {

    switch (action.type) {
        case SHOW_MENU:
            return {...state,showMenu: 'nav-bar'}
        case CLOSE_MENU:
            return {...state,showMenu: 'nav-bar-none'}
        default: 
            return state
    }
}
export const showMenuAction = (payload) => ({type:SHOW_MENU, payload})
export const closeMenuAction = (payload) => ({type:CLOSE_MENU, payload})

export default showMenuReducer;