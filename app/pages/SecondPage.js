import React from 'react';

import { Row, Col } from 'react-grid-system';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import axios from 'axios';

import Uploader from './uploader';

export default class SecondPage extends React.Component {

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="Welcome To My Second Page!"
              subtitle="WooHoo"
            />
            <CardText>
              <Uploader />
            </CardText>
          </Card>
        </Col>
      </Row>
    );
  }
}
