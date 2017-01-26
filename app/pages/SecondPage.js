import React from 'react'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText } from 'material-ui/Card'
var Dropzone = require('react-dropzone');
import axios from 'axios';

export default class SecondPage extends React.Component {

  onDrop (acceptedFiles, rejectedFiles) {
        const url = '/upload';
        console.log('Accepted files: ', acceptedFiles);
        console.log('Rejected files: ', rejectedFiles);
        acceptedFiles.forEach((file)=> {
          console.log("file: ", file);
          axios.put(url, file, {
            headers: {
              'Content-Type': file.type
            }
          });
        });

  }

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
              <Dropzone onDrop={this.onDrop}>
                <div>Try dropping some files here, or click to select files to upload.</div>
              </Dropzone>
            </CardText>
          </Card>
        </Col>
      </Row>
    );
  }
}
