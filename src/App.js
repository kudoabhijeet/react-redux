import React from "react";
import ButtonClick from './components/Button'
import DisplayCount from './components/DisplayCount'
import {Row,Col} from 'react-bootstrap'

function App() {
  return (
    <Row style={{overflow: 'hidden'}}>
      <Col>
        <ButtonClick/>
      </Col>
      <Col>
        <DisplayCount/>
      </Col>
    </Row>
    
  );
}

export default App;
