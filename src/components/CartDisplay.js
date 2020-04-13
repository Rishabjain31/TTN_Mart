import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Cart from './Cart';
import { increaseUnit,deductUnit,deleteCartItem } from '../Actions/index';

import '../../style.css';

class cartDisplay extends Component{
    componentWillReceiveProps(nextProps){
        console.log("props",nextProps);
    }

    onAddUnit= (data) =>{
        this.props.increaseUnit(data);
    };

    onDeductUnit= (data) =>{
        this.props.deductUnit(data);
    };

    handelDeleteFromCart= (data) =>{
        this.props.deleteCartItem(data);
    };

    cartTotal=() =>{
        return(
            <h4 className="Border"> Total Price : ₹{this.totalAmount(this.props.cart)} </h4>
        )
    };

    totalAmount =(cartArray) =>{
        return cartArray.reduce((acum,item) =>{
            acum+= item.price * item.quantity;
            return acum;
        },0)
    };

    render() {
        let CartList= this.props.cart.map((data) =>{
            return(
                <Fragment key={data.id}>
                    <Cart
                        product={data}
                        onAddUnit={()=> this.onAddUnit(data)}
                        onDeductUnit={()=> this.onDeductUnit(data)}
                        handleDeleteFromCart={()=> this.handelDeleteFromCart(data)}
                    />

                </Fragment>
            )
        });
        return (
            <div className="container">
                <div className="separation"> </div>
                <div className="rightSide">
                    <h2 className="cartHeading"> My Cart </h2>
                    {
                        this.props.cart.length!==0 ?
                            <div> { CartList }{ this.cartTotal()} </div> :
                            <div> Cart Empty </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=> {
    return {
        cart: state.cartReducer.cart
    }
};

// const mapDispatchToProps = dispatch => ({
//     increaseUnit: (data) => dispatch ({type: 'increaseUnit' , data: data}),
//     deductUnit: (data) => dispatch ({type: 'deductUnit' , data: data}),
//     deleteCartItem: (data) => dispatch ({type: 'deleteCartItem', data: data, availableQuantity: data.quantity})
// });

const mapDispatchToProps = dispatch  => {
    return bindActionCreators({
        increaseUnit,
        deductUnit,
        deleteCartItem,
    },dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(cartDisplay);