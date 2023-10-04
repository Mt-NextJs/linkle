import React from 'react';
import './Header.css'
import { useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';

const Header = ({search,clickLogo}) => {
    const inputRef=useRef();
    let navigate = useNavigate() ;

    const searchfnc = () => {
        const value = inputRef.current.value;
        search(value)
        navigate(`/search?search_query=${value}`)
    }

    const handleSearchBtn = () => {
        searchfnc();
    }
    const handleInputEnter = (e) =>{
        if(e.key==='Enter'){
         searchfnc();
        }
    }

    return (
        <div className='header'>
            <div className='logoArea'>
                <h1><Link to="/" onClick={clickLogo}>YOUTUBE</Link></h1>
            </div>
            <div className='searchInputArea'>
                <input
                    type='search'
                    placeholder='검색어를 입력하세요'
                    className='searchInput'
                    ref={inputRef} 
                    onKeyDown={handleInputEnter}
                />
                <button 
                className="searchbtn"
                onClick={handleSearchBtn}
                >
                 검색
                </button>
            </div>
            <div className="topMenuarea">
                <button>알림</button>
                <button>동영상업로드</button>
                <button>프로필</button>
            </div>
        </div>
    );
};

export default Header;