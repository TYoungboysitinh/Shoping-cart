import React, { Component } from 'react';

export default class CartItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            quantity:0
        }
    }
    render() {
        let {renderCart, rollNo} = this.props;
        //Xử lý hiển thị số lượng
        let quantity = (this.state.quantity === 0)? renderCart.quantity:this.state.quantity;
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
                        onChange={(event)=>this.setState({quantity:event.target.value})}
                    />
                </td>
                <td>
                    <strong>{renderCart.product.price*quantity} USD</strong>
                </td>
                <td>
                    <a
                        className="label label-info update-cart-item"
                        href="#"
                        data-product=""
                    >
                        Update
                    </a>
                    <a
                        className="label label-danger delete-cart-item"
                        href="#"
                        data-product=""
                    >
                        Delete
                    </a>
                </td>
            </tr>
        );
    }
}
