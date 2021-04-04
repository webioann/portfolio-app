const BIG = "BIG";
const MEDIUM = "MEDIUM";
const SMALL = "SMALL";

const pageSizeReducer = (state = { pageSize: 10},action) => {
    switch (action.type) {
      case BIG:
        return {...state,pageSize: 10 }             
      case MEDIUM:
        return {...state,pageSize: 8 }
      case SMALL:
        return {...state,pageSize: 4 } 
      default: 
        return state  
    }
}
export const bigPageAction = (payload) => ({type:BIG, payload})
export const mediumPageAction = (payload) => ({type:MEDIUM, payload})
export const smallPageAction = (payload) => ({type:SMALL, payload})

export default pageSizeReducer ;