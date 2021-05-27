import React from "react";
import {Button} from "react-bootstrap";
import {increment} from '../redux/actions/increment'
import {useDispatch} from 'react-redux'

const ButtonClick = () => {
    const dispatch = useDispatch();
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:'100vh'
        }}>
            <Button variant={"primary"} onClick={() => dispatch(increment())}>Click Me</Button>
        </div>
    )
}

export default ButtonClick;