import * as actionTypes from '../actions/actionTypes';

// const initialState = {
    
// }

const authReducer = (state = {}, action) => {
    
    switch (action.type) {  

        case actionTypes.FETCH_USER_SUCCESS:
            return action.payload || false
      
        default: 
            return state;
    }
}



export default authReducer;