import React from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label,
} from 'reactstrap';

const EditTransportForm: React.FC = () => (
  <div>
    <h3 className="mb-3">Edit transport</h3>
    <Form>
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
        <Label for="transport-number" sm={2}>
          Transport number
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="transport-number"
            id="transport-number"
            placeholder="Enter transport number"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="model" sm={2}>
          Model
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="model"
            id="model"
            placeholder="Enter model"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="transport-type" sm={2}>
          Transport type
        </Label>
        <Col sm={10}>
          <Input type="select" name="transport-type" id="transport-type">
            <option>cargo</option>
            <option>passenger</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="purchase-date" sm={2}>Purchase date</Label>
        <Col sm={10}>
          <Input
            type="date"
            name="purchase-date"
            id="purchase-date"
            placeholder="Enter purchase date"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="mileage" sm={2}>Mileage</Label>
        <Col sm={10}>
          <Input
            type="number"
            name="mileage"
            id="mileage"
            placeholder="Enter mileage"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="status" sm={2}>
          Status
        </Label>
        <Col sm={10}>
          <Input type="select" name="status" id="status">
            <option>available</option>
            <option>unavailable</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button type="submit" color="primary">Edit</Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
);

export default EditTransportForm;
