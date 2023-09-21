// Combine reducer
import {combineReducers} from 'redux'
import listProducts from './listProducts'
import cart from './cart'
import notify from './notify'
// Tạo reducer cho ứng dụng 
const reducer = combineReducers({
    listProducts:listProducts,
    cart:cart,
    notify:notify
})
export default reducer ;
