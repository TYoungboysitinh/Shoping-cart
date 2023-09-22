import React, { Component } from 'react';
import { MSG_DELETE_SUCCESS, MSG_UPDATE_SUCCESS } from '../constants/messages'
import { connect } from 'react-redux';
import { act_change_notify, act_delete_item, act_update_item } from '../actions'

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
    }

    handleDelete = (product) => {
        if (window.confirm("Bạn có muốn xóa sản phẩm ra khỏi giỏ hàng không ?")) {
            this.props.deleteItem(product)
            this.props.changeNotify(MSG_DELETE_SUCCESS)
        }
    }

    handleUpdate = (product) =>{
        this.props.updateItem(product, this.state.quantity);
        this.props.changeNotify(MSG_UPDATE_SUCCESS)
    }
    render() {
        let { renderCart, rollNo } = this.props;
        //Xử lý hiển thị số lượng
        let quantity = (this.state.quantity === 0) ? renderCart.quantity : this.state.quantity;
        return (
            <tr>
                <th scope="row">{rollNo}</th>
                <td>{renderCart.product.productName}</td>
                <td>{renderCart.product.price} USD</td>
                <td>
                    <input
                        name="cart-item-quantity-1"
                        type="number"
                        value={quantity}
                        min={1}
                        onChange={(event) => this.setState({ quantity: event.target.value })}
                    />
                </td>
                <td>
                    <strong>{renderCart.product.price * quantity} USD</strong>
                </td>
                <td>
                    <a
                        className="label label-info update-cart-item"
                        href="#"
                        data-product=""
                        onClick={() => this.handleUpdate(renderCart.product)}
                    >
                        Update
                    </a>
                    <a
                        className="label label-danger delete-cart-item"
                        href="#"
                        data-product=""
                        onClick={() => this.handleDelete(renderCart.product)}
                    >
                        Delete
                    </a>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
        carts:state.cart,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateItem: (product, quantity)=>{
            dispatch(act_update_item(product, quantity))
        },
        deleteItem: (product) => {
            dispatch(act_delete_item(product))
        },
        changeNotify: (content) => {
            dispatch(act_change_notify(content))
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);