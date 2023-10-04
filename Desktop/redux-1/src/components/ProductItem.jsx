import React from 'react';
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { addCart } from '../store/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({item}) => {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const goToDetail = () => {
        navigate(`/proudct/${item.id}`)
    }

    return (
        <div className="product-item">
            <img 
            src={item.product_img}
            alt="product"
            className='item-image' />
            <div className="item-name" onClick={goToDetail}>{item.product_name}</div>
            <div className="item-price">{item.price}원</div>
            <button className='add-cart-btn' onClick={()=>dispatch(addCart(item))}>
                <i className="fas fa-plus"></i>
                장바구니에 담기
            </button>

        </div>
    );
};

export default ProductItem;