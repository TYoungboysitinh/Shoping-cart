import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'

class ListProducts extends Component {
    render() {
        console.log("ListProduct", this.props.products);
        let elementProduct = this.props.products.map((item, index)=>{
            return <Product key={item.productID} product={item} stt={index+1}/>
        })
        return (
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="panel panel-primary">
                    <div class="panel-heading"><h1 class="panel-title">List Products</h1></div>
                    {elementProduct}
                </div>
            </div>
        )
    }
}

// Map state trong store với props trong component
const mapStateToProps = (state) =>{
    return{
        products:state.listProducts
    }
}
export default connect(mapStateToProps, null)(ListProducts);


