import { Formik } from 'formik';
import React from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label,
} from 'reactstrap';
import { createTransportRequest } from '../../../services/api';

const AddTransportForm: React.FC = () => {
  const defaultFormState = {
    transportNumber: '',
    model: '',
    transportType: 'cargo',
    purchaseDate: '',
    mileage: 0,
    status: 'available',
  };

  const handleTransportCreate = (data: any) => {
    const {
      transportNumber,
      model,
      transportType,
      purchaseDate,
      mileage,
      status,
    } = data;
    createTransportRequest({
      transportNumber,
      model,
      transportType,
      purchaseDate,
      mileage,
      status,
    })
      .then(() => alert('Added transport'))
      .catch((err) => alert(err));
  };
  return (
    <div>
      <h3 className="mb-3">Create a new transport</h3>
      <Formik initialValues={defaultFormState} onSubmit={handleTransportCreate}>
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label for="transportNumber" sm={2}>
                Transport number
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="transportNumber"
                  id="transportNumber"
                  placeholder="Enter transport number"
                  value={values.transportNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  value={values.model}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="transportType" sm={2}>
                Transport type
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="transportType"
                  id="transportType"
                  value={values.transportType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>cargo</option>
                  <option>passenger</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="purchaseDate" sm={2}>Purchase date</Label>
              <Col sm={10}>
                <Input
                  type="date"
                  name="purchaseDate"
                  id="purchaseDate"
                  placeholder="Enter purchase date"
                  value={values.purchaseDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="mileage" sm={2}>Mileage</Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="mileage"
                  min="0"
                  id="mileage"
                  placeholder="Enter mileage"
                  value={values.mileage}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="status" sm={2}>
                Status
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="status"
                  id="status"
                  value={values.status}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>available</option>
                  <option>unavailable</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">Create</Button>
              </Col>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default AddTransportForm;
