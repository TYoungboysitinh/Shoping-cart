import React, { Component } from 'react'
import { connect } from 'react-redux'
class Notify extends Component {
    render() {
        return (
            <div>
                <div class="alert alert-success" role="alert" id="mnotification"><b>{this.props.message}</b></div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        message:state.notify,
    }
}
export default connect(mapStateToProps, null)(Notify);