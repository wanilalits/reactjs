import React, { Component } from 'react';
import {Card,Button } from 'react-bootstrap';


class Footer extends Component {
    render() {
        return (
            <div className='footer'>
 
                <Card className="text-center">
  <Card.Header>About Us</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">.......................</Card.Footer>
</Card>
            </div>
        );
    }
}

export default Footer;