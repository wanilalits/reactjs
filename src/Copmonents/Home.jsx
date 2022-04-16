import React, {Component} from 'react';
import Slider from './Slider';
import Footer from './Footer';
import {Card,Button } from 'react-bootstrap';
import Responsive from '../Responsive/Responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <div>
          <Slider> </Slider>
          <div style={{color:"red", fontSize:"3vw",  fontWeight:"600",  textAlign: 'center' ,  }}> please do not refresh the page...(gh-pages is not been added yet)</div>
          <div style={{color:"Black", fontSize:"3vw",  fontWeight:"600",   textAlign: 'center',   }}> Under Development</div>
         


         <div className='home_grand_parent'>
         <div className='home_parents'>
       
        <Card  border= 'warning' className='home_child' style={{  }}>
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
        
        
 
        
        
        <Card  border= 'warning' className='home_child' style={{ width: '300px' }}>
          <Card.Header style={{  textAlign: 'center', fontSize:"30px", fontWeight:"500" }} >React Js FrontEnd</Card.Header>
  <Card.Body>
 
    <br/>
    <Card.Subtitle className="success"> - Dashboard <br/>- Responsive CSS </Card.Subtitle>
    <br/>
    <Card.Text>
    C & C++, HTML, CSS, JS, React JS
   <br/>API, Postman,  
     <br/>Bootstrap, Router, Material ui, 
     <br/>
     FontAwesome, <br/>
     .
      
     <br/>
     .
     
    </Card.Text>

  </Card.Body>
</Card>
        
        
    

         </div>

         </div>
          <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
<div style={{  display: 'inline-block',     }}>
    
</div>

<div style={{  display: 'inline-block', marginLeft:"0px",marginTop:"10px",}}>

</div>
</div>
          <br/><br/>.<br/>.<br/>.<br/>.<br/><br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.
            



            <Footer></Footer>
              

              
               
            </div>
        );
    }
}

export default Home;
//<FontAwesomeIcon icon="fa-solid fa-circle" />