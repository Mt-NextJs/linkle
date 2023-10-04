import React from 'react';
import "./ProductList.css";
import {useEffect } from "react";
import ProductItem from "./ProductItem"
import {useDispatch ,useSelector } from "react-redux";
import {getProduct} from './../store/product/productSlice';
import { useSearchParams } from "react-router-dom";

const ProductList= () => {
    const [query, setQuery] = useSearchParams();
    const  keyword = query.get("q") || "";
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.product.value);
   
    console.log('상품',products.length)
    
    useEffect(()=>{
        dispatch(getProduct(keyword))
    },[dispatch, keyword])
  
    return (
        
        <div className="product-list">
             <h2 className="product-list-title">상품 목록</h2>
           {
                products.length > 0 ? 
                (
                <div className="product-item-container">
                    {
                        products.map(item=>{
                            return <ProductItem key={item.id} item={item} />
                        })
                    }
                 </div>
                 ) :
                (
                 <h2>상품검색 결과가 없습니다.</h2>
                )
             }
             
        </div>


     )
}
export default ProductList;