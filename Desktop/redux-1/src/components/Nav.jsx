import React from 'react';
import "./Nav.css";
import { useSelector ,useDispatch } from "react-redux";
import {Link,useNavigate} from 'react-router-dom';
import { logout } from './../store/user/userSlice';
const Nav = () => {    
    const cart=useSelector(state=>state.cart)
    const user= useSelector(state=>state.user.value)
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const onSearch = (e) => {
        if(e.key==='Enter'){
            navigate(`?q=${e.target.value}`)
        }
    }
    return (   
        <nav className="nav">
            <h1><Link to='/'>SHOP</Link></h1>
            <div className='search-box'>
                <input type="text" placeholder='원하는 상품을 찾아보세요'  onKeyUp={onSearch} />
            </div>
            <div>
                <span>
                    <Link to='/cart'>
                    <i className="fas fa-shopping-cart">
                        <div className='cart-amount'>{cart.length}</div>
                    </i>
                    </Link>
                </span>
                <span className="user">
                    {
                        user ? 
                        <span className="user" onClick={()=>{dispatch(logout(false))}}>로그아웃</span> :
                        <span className="user" onClick={()=>navigate('/login')}>로그인</span> 
                    }
                </span>
            </div>
        </nav>
    );
};

export default Nav;