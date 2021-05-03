import React from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label,
} from 'reactstrap';

const AssignTransportForm: React.FC = () => (
  <div>
    <h3 className="mb-3">Assign transport to route</h3>
    <Form>
      <FormGroup row>
        <Label for="route-id" sm={2}>
          Route ID
        </Label>
        <Col sm={10}>
          <Input type="select" name="route-id" id="route-id">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="transport-id" sm={2}>
          Transport ID
        </Label>
        <Col sm={10}>
          <Input type="select" name="transport-id" id="transport-id">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button type="submit" color="primary">Assign</Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
);

export default AssignTransportForm;
