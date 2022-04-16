import React, {Component} from 'react';
import Slider from './Slider';
import Footer from './Footer';
import {Card,Button } from 'react-bootstrap';
import Responsive from '../Responsive/Responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
    render() {
        return (
            <div>
          <Slider> </Slider>
          <div style={{color:"red", fontSize:"3vw",  fontWeight:"600",  textAlign: 'center' ,  }}> please do not refresh the page...(gh-pages is not been added yet)</div>
          <div style={{color:"Black", fontSize:"3vw",  fontWeight:"600",   textAlign: 'center',   }}> Under Development</div>
         


          <br/> <br/>
<div style={{  display: 'inline-block' , marginLeft:'20px', }}>
          <Card  border= 'warning'  style={{ width: '30rem' }}>
          <Card.Header style={{  textAlign: 'center', fontSize:"30px", fontWeight:"500" }} >IoT</Card.Header>
  <Card.Body>
 
    <br/>
    <Card.Subtitle className="success"> - Vehicle Tracking System (VTS), <br/> - Industrial Diesel Generator IoT,<br/>- Power Factor, Voltage, Current Monitoring</Card.Subtitle>
    <br/>
    <Card.Text>
    GPS, GSM, Wi-Fi, Bluetooth 
   <br/>I2C, SPI, UART, RC5, I2S, PDM, Analog, Differential (Modbus/RS485) 
     <br/>KiCad EDA, Eagle
     <br/>
     Arduino, 8051, NODEMCU, PIC
    </Card.Text>

  </Card.Body>
</Card>
</div>

<div style={{  display: 'inline-block',  marginLeft:'20px', }}>
<Card  border= 'warning'  style={{ width: '30rem' }}>
          <Card.Header style={{  textAlign: 'center', fontSize:"30px", fontWeight:"500" }} >React Js FrontEnd</Card.Header>
  <Card.Body>
 
    <br/>
    <Card.Subtitle className="success"> - Dashboard <br/> -Router <br/>- Responsive CSS </Card.Subtitle>
    <br/>
    <Card.Text>
    C & C++, HTML, CSS, JS, React JS
   <br/>API, Postman,  
     <br/>Bootstrap, Router, Material ui, 
     <br/>
     FontAwesome, .......
     <br/>
     <br/>
   
     
    </Card.Text>

  </Card.Body>
</Card>
</div>
          <br/><br/>.<br/>.<br/>.<br/>.<br/><br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.
            



            <Footer></Footer>
              

              
               
            </div>
        );
    }
}

export default Home;
//<FontAwesomeIcon icon="fa-solid fa-circle" />