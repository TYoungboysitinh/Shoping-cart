import { CHANGE_NOTIFY } from '../constants/actionTypes';
import * as mess from '../constants/messages'
// Hằng 
const initState = mess.MSG_LOAD_SUCCESS
// Tạo reducer
const notify = (state = initState, action) =>{
    switch(action.type){
        case CHANGE_NOTIFY:
            state=action.payload
            return state;
        default:
            return state;
    }

    return state; // New state
}
export default notify;