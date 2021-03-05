const CHOOSE_NATIO = "CHOOSE_NATIO";

const natioReducer = (state = {natio: []},action) => {
    switch (action.type) {
      case CHOOSE_NATIO:
        return {...state,natio:[] + action.payload}             
      default: 
        return state  
    }
}
export const chooseNatioAction = (payload) => ({type:CHOOSE_NATIO, payload})

export default natioReducer ;