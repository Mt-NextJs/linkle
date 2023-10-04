import React from 'react';
import {useParams} from "react-router-dom"

const Detail = () => {
    let params = useParams();
    console.log('파라미터 아이디',params.id)
    return (
        <div>
            <h2>상품상세페이지</h2>
            <h3>제품의 아이디는 {params.id}</h3>
        </div>
    );
};

export default Detail;