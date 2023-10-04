import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { decrement, increment } from './../store/counter/counterSlice'

const Counter = () => {
    const dispatch = useDispatch();
    const count =  useSelector(state => state.counter.value)

    return (
        <div>
            <button onClick={()=>dispatch(increment(2))}>증가</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(decrement(2))}>감소</button>
        </div>
    );
};

export default Counter;