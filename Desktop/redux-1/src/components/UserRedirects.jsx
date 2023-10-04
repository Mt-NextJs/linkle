import React from 'react';
import Detail from './Detail';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const UserRedirects = () => {
    const user = useSelector((state)=>state.user.value);
    return (
        <div>
            { 
            user  === true ? 
            <Detail /> :
            <Navigate to="/login" />
            }
        </div>
    );
};

export default UserRedirects;