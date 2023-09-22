import React, { Component } from 'react';

export default class CartTotal extends Component {
    render() {
        let { renderCarts } = this.props;
        let elementCartInfo = <tr>
                                <th colSpan={6}>Empty product in your cart</th>
                              </tr>
        if(renderCarts != null && renderCarts.length >0){
            //Tính tổng giá
            let cartTotal = 0;
            for (let index = 0; index < renderCarts.length; index++) {
                cartTotal += parseFloat(renderCarts[index].product.price)*parseFloat(renderCarts[index].quantity)
            }
            elementCartInfo = (
                <tr>
                    <td colSpan={4}>
                        There are <b>{renderCarts.length}</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                        {cartTotal} USD
                    </td>
                </tr>
            )
        }
        return (
            <tfoot>
                {elementCartInfo}
            </tfoot>
        );
    }
}
