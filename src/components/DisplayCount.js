import React from "react";
import {useSelector} from 'react-redux';

const DisplayCount = () => {
    const counter = useSelector(state => state.counter)
    const createCard = () => {
        
        return(
            <div
                style={{
                    height:'40%',
                    width: '40%',
                    backgroundColor: "lightblue",
                    boxShadow: '5px 10px gray',
                    borderRadius: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <p style={{fontFamily:'Times New Roman, Times, serif', fontSize:'100px'}}>{counter}</p>
            </div>
        )
    }

    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:'100vh'
        }}>
            {createCard()}
        </div>
    )
}

export default DisplayCount;