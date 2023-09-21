import React, { Component } from 'react'
import { MSG_BUY_SUCCESS } from '../constants/messages'
import { connect } from 'react-redux'
import { act_buy_item, act_change_notify } from '../actions/index'
class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
        }
    }
    // Hàm xử lý sự kiện mua hàng
    handleBuy = (product) => {
        // Thực hiện mua hàng:
        this.props.buyItem(product, this.state.quantity)
        // Thực hiện thông báo
        this.props.changeNotify(MSG_BUY_SUCCESS)
    }
    render() {
        let { product, stt } = this.props;
        let element = <span class='price'>{product.price} USD</span>;
        if (product.quantity > 0) {
            element = <>
                <input
                    name="quantity-product-1"
                    type="number"
                    value={this.state.quantity}
                    min={1}

                    onChange={(e) => this.setState({ quantity: e.target.value })} />            
                    <button data-product="1" class="btn btn-success"
                        onClick={() => this.handleBuy(product)}
                    >
                    Mua hàng
                </button>
                <a data-product="1" href="#" className="price"> 12 USD </a>

            </>
        }
        return (
            <div>
                <div className="panel-body" id="list-product">
                    <div className="media product">
                        <div className="media-left">
                            <a href="#">
                                <img class="media-object" src={`images/${product.image}`} alt="charmander" />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">{product.productId}</h4>
                            <p>{product.descriptions}</p>
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        // Bắn action mua hàng đến redux
        buyItem: (product, quantity) => {
            dispatch(act_buy_item(product, quantity));
        },
        changeNotify: (content) => {
            dispatch(act_change_notify(content));
        }
    }
}
export default connect(null, mapDispatchToProps)(Product);
