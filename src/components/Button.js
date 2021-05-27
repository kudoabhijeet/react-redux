import React from "react";
import {Button} from "react-bootstrap";

const ButtonClick = () => {
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:'100vh'
        }}>
            <Button variant={"primary"} onClick={() => {}}>Click Me</Button>
        </div>
    )
}

export default ButtonClick;