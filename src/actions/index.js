import * as types from '../constants/actionTypes'

// Action cho chức năng hiển thị sản phẩm 
export const act_list_product = () => {
    return{
        type:types.LIST_PRODUCT
    }
}

// Action cho chức năng mua hàng 
export const act_buy_item = (product, quantity) =>{
     return{
        type:types.BUY_ITEM,
        product,
        quantity
     }
}

// Action cho chức năng thông báo 
export const act_change_notify = (content) =>{
    return{
        type:types.CHANGE_NOTIFY,
        payload:content,
        
    }
}