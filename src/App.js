
import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import { Col, Container, Row } from "react-bootstrap";
import './App.css';

const App = () => {

  const [counter, setCounter] = useState(0) 
  
    const handleClickPlus = () => {
      setCounter(counter + 1)
    }
    
    const handleClickMin = () => { 
      setCounter(counter - 1)
    }

  const [counters, setCounters] = useState(0) 
  
    const handleClickPluss = () => {
      setCounters(counters + 1)
    }
    
    const handleClickMins = () => { 
      setCounters(counters - 1)
    }
  
  return (
    
      <Container>
        <Row className="justify-content-center">
          <Col className="col col-lg-12">
            <div className="mainContent justify-content-center">
              <h1 className="header text-center shadow">
                Counter Score <i class="bi bi-layout-sidebar-inset-reverse"></i>
              </h1>
              <Row className="justify-content-center align-item-center">
                <Col className="col col-lg-6 col-md-6 col-6">
                  <Row className="justify-content-center">
                    <h2 className="text-center club mt-5 px-5 py-2 rounded-5">Club A</h2>
                  </Row>
                  <Row className="justify-content-center">
                    <div className="mainText shadow text-center mx-lg-5">
                      {counter}
                    </div>
                  </Row>
                  <div className="button text-center">
                    <button className="btn btnMin btn-danger shadow px-lg-3 px-md-4 px-4"
                      onClick={handleClickMin}><i class="bi bi-dash"></i> Minus</button>
                    <button className="btn btnPlus btn-success shadow px-lg-3 px-md-4 px-4"
                      onClick={handleClickPlus}><i class="bi bi-plus"></i> Plus</button>
                  </div>
                </Col>
                <Col className="col col-lg-6 col-md-6 col-6">
                  <Row className="justify-content-center">
                    <h2 className="text-center club mt-5 px-5 py-2 rounded-5">Club B</h2>
                  </Row>
                  <Row className="justify-content-center">
                    <div className="mainText shadow text-center mx-lg-5">
                      {counters}
                    </div>
                  </Row>
                  <div className="button text-center">
                    <button className="btn btnMin btn-danger shadow px-lg-3 px-md-4 px-4"
                      onClick={handleClickMins}><i class="bi bi-dash"></i> Minus</button>
                    <button className="btn btnPlus btn-success shadow px-lg-3 px-md-4 px-4"
                      onClick={handleClickPluss}><i class="bi bi-plus"></i> Plus</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

  )
}

export default App;

