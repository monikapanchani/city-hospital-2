import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/action/counter.action';

function Counter(props) {
    const dispatch = useDispatch()
    const c = useSelector((state)=>state.counter)

    const handleIncrement=() => (dispatch) =>{
        dispatch(()=>increment())
    }

    const handleDecrement=() => (dispatch)=>{
        dispatch(()=>decrement())
    }
    return (
        <div>
            <button onClick={()=>handleIncrement()}>+</button>
            <p>{c}</p>
            <button onClick={()=>handleDecrement()}>-</button>
        </div>
    );
}

export default Counter;