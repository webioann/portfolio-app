const FEMALE = "FEMALE";
const MALE = "MALE";
const ALL_SEX = "ALL_SEX";

const defaultState = {gender : "all"};

const genderReducer = (state = defaultState,action) => {
    switch (action.type) {
        case FEMALE:
            return {...state,gender: 'female'}
        case MALE:
            return {...state,gender: 'male'}
            case ALL_SEX:
                return {...state,gender: 'all-sex'}
        default: 
            return state
    }
}
export const femaleAction = (payload) => ({type:FEMALE, payload})
export const maleAction = (payload) => ({type:MALE, payload})
export const allSexAction = (payload) => ({type:ALL_SEX, payload})

export default genderReducer;