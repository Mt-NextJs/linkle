import React from 'react';
import './CartItem.css';
import { deleteCart } from '../store/cart/cartSlice';
import { useDispatch , useSelector  } from "react-redux";

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart) ; 
    const restItem = cart.filter((ele)=>ele.id === item.id ) ;
    return (
        <div className="cart-item">
            <img 
            src={item.product_img}
            alt="cart-item" 
            className="cart-item-img"
            />
            <span className="cart-item-name">{item.product_name}</span>
            <span className="cart-item-price">{item.price}</span>
            <i className="fas fa-trash-alt" onClick={()=>dispatch(deleteCart(restItem))}></i>
           
        </div>
    );
};

export default CartItem;