import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
import HornedBeastData from '../data/horned.json';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: HornedBeastData
    };
  }
  handelClose = () => {
    console.log('hello');
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row className="justify-content-md-center">
            {this.state.data.map((result, index) => (
              <>
                <Col md="auto">
                  <HornedBeast
                    key={index}
                    title={result.title}
                    url={result.image_url}
                    desc={result.description}
                    myFanction={this.handelClose}
                  />
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
