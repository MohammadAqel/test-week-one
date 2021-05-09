import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class HornedBeast extends Component {
  render() {
    return (
      <>
        <Card key={this.props.key} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.url} alt="..." />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.desc}</Card.Text>
            <Button onClick={this.props.myFanction} variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;
