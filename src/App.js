
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
  
  return (
    
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div style={styles.mainContent} className="justify-content-center">
              <h1 style={styles.header}>
                Counter App <i class="bi bi-check-circle-fill"></i>
              </h1>
              <div className="shadow" style={styles.mainText}>
                {counter}
              </div>
              <Row className="justify-content-center">
                <Col className="col-12">
                  <div className="button justify-content-center" style={styles.button}>
                    <button className="btn btn-danger shadow px-3" style={styles.btnMin}
                      onClick={handleClickMin}><i class="bi bi-dash"></i> Minus</button>
                    <button className="btn btn-success shadow px-3" style={styles.btnPlus}
                      onClick={handleClickPlus}><i class="bi bi-plus"></i> Plus</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

  )
}

const styles = {

    mainContent : {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      width: '100%',
      height: '100%',
      marginTop: 50
    },

    header : {
      fontSize: 42,
      color: 'black'
    },

    mainText : {
      fontSize: '1.9em',
      position: 'relative',
      top: '.5em',
      color: 'white',
      backgroundColor: '#D4870C',
      paddingLeft: 50,
      paddingRight: 50,
      paddingBottom: 10,
      borderRadius: 25
    },

    button : {
      marginTop: '2em',
    },

    btnMin : {
      fontSize: '1.5rem',
      top: '20vh',
      borderRadius: 16,
      color: 'white',
      cursor:'pointer'
    },

    btnPlus : {
      fontSize: '1.5rem',
      top: '20vh',
      marginLeft: '25px',
      borderRadius: 16,
      color: 'white',
      cursor: 'pointer'
    }

}
  

export default App;
