import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Product from './src/components/Product';
import { decreaseQuantity } from './src/Actions';

import './style.css';

class App extends Component {

    componentWillReceiveProps(nextProps){
        console.log("props",nextProps);
    }

    handelAddToCart = (data) =>{
        this.props.decreaseQuantity(data);
    };

    render() {
        let ProductList= this.props.products.map((data) =>{
            return(
                <Fragment key={data.id}>
                    <Product
                        image={ data.image }
                        name={ data.name }
                        qty={ data.quantity }
                        price={ data.price }
                        AddToCartHandler={()=> this.handelAddToCart(data)}
                    />
                </Fragment>
            )
        });

        return (
            <div className="container">
                <h1>TTN MART</h1>
                <div className="cartView">
                    <div className="leftSide">
                        <div className="productList">
                            { ProductList }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=> {
    return {
        products: state.productReducer.products
    }
};

const mapDispatchToProps = dispatch  =>{
    return bindActionCreators({
        decreaseQuantity
    },dispatch);
};

// const mapDispatchToProps = dispatch => ({
//     decreaseQuantity: (data) => dispatch ({type: 'decreaseQuantity', data:data})
// });

export default connect(mapStateToProps,mapDispatchToProps)(App);

