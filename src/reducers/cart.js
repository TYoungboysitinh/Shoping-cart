// Sử dụng các chức năng trong giỏ hàng
import { BUY_ITEM, DELETE_ITEM, UPDATE_ITEM } from '../constants/actionTypes'
// Sử dụng Local Storage
import { LOCAL_STORAGE_NAME } from '../constants/localStorageName';
// Hằng : Khởi tạo stage quản lý giỏ hàng
let initState = []
// Kiểm tra xem mua lần đầu tiên hay mua thêm 
const shopingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME))
initState = (shopingCartLocal != null && shopingCartLocal.length >= 0) ? shopingCartLocal : []
// Hàm kiểm tra xem sản phẩm đã có trong giỏ hàng không 
const getIndexByProduct = (list, product) => {
    if (list) {
        for (let index = 0; index < list.length; index++) {
            if (list[index].product.productID === product.productID) {
                return index; // Sản phẩm đã tồn tại trong giỏ hàng
            }
        }
    }
    return -1;
}

// Tạo reducer
const cart = (state = initState, action) => {
    // Lấy sản phẩm, số lương từ action
    let { product, quantity } = action;
    let item = { product, quantity };
    // Biến quản lý chức năng mua (mua mới, mua thêm)
    let index = -1; // Giả định sản phẩm là mua mới

    // Tùy theo chức năng (type) để xác định mua hàng, cập nhật, xóa
    switch (action.type) {
        case BUY_ITEM:
            if (state.length === 0) {
                // Khách hàng chưa mua hàng, giỏ hàng của khách chưa có sản phẩm nào thêm sản phẩm vào giỏ hàng
                state.push(item)
            } else {
                // Giỏ hàng đã tồn tại
                // Tồn tại 2 trường hợp
                // Dựa vào index để xác định => Viết hàm kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
                index = getIndexByProduct(state.product);
                if (index >= 0) {
                    // Sản phẩm mua đã có trong giỏ hàng, thực hiện cập nhật số lượng
                    state[index].quantity = parseInt(state[index].quantity) + parseInt(quantity);
                } else {
                    // Sản phẩm mua chưa có trong giỏ hàng
                    state.push(item);
                }
            }
            // Cập nhật lại localstorage
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
            console.log(state);
            return [...state];
        case UPDATE_ITEM:
            break;
        case DELETE_ITEM:
            break;
        default:
            return state;
    }



    return state; // New state
}
export default cart;

