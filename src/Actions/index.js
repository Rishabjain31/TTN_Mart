import { DECREASE_QUANTITY,INCREASE_UNIT,DEDUCT_UNIT,DELETE_CART_ITEM } from '../constants';

export const decreaseQuantity=(data)=>{
    return{
        type: DECREASE_QUANTITY,
        data:data
    }
};

export const increaseUnit=(data)=> {
    return {
        type: INCREASE_UNIT,
        data: data
    }
};

export const deductUnit= (data) => {
    return {
        type: DEDUCT_UNIT,
        data: data
    }
};

export const deleteCartItem= (data)=>{
    return{
        type: DELETE_CART_ITEM,
        data: data,
        availableQuantity: data.quantity
    }
};