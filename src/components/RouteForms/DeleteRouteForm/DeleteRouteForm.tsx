import React from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label,
} from 'reactstrap';

const DeleteRouteForm: React.FC = () => (
  <div>
    <h3 className="mb-3">Delete route</h3>
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
        <Col sm={{ size: 10, offset: 2 }}>
          <Button type="submit" color="danger">Delete</Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
);

export default DeleteRouteForm;
