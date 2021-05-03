import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label,
} from 'reactstrap';
import { editTransportRequest, getTransports } from '../../../services/api';

const EditTransportForm: React.FC = () => {
  const [transports, setTransports] = useState<any>([]);
  const retrieveTransports = () => {
    getTransports()
      .then((response: any) => {
        setTransports(response.data);
      })
      .catch((e) => {
        alert(e);
      });
  };
  useEffect(() => {
    retrieveTransports();
  }, []);

  const defaultFormState = {
    id: 'Select route id',
    transportNumber: '',
    model: '',
    transportType: 'cargo',
    purchaseDate: '',
    mileage: 0,
    status: 'available',
  };

  const handleTransportEdit = (data: any) => {
    const {
      id,
      transportNumber,
      model,
      transportType,
      purchaseDate,
      mileage,
      status,
    } = data;
    editTransportRequest({
      id,
      transportNumber,
      model,
      transportType,
      purchaseDate,
      mileage,
      status,
    })
      .then(() => alert('Edited transport'))
      .catch((err) => alert(err));
  };
  return (
    <div>
      <h3 className="mb-3">Edit transport</h3>
      <Formik initialValues={defaultFormState} onSubmit={handleTransportEdit}>
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label for="id" sm={2}>
                Route ID
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="id"
                  id="id"
                  value={values.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Select route id</option>
                  {transports.map((route: any) => <option key={route.id}>{route.id}</option>)}
                </Input>
              </Col>
            </FormGroup>
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
                <Button type="submit" color="primary">Edit</Button>
              </Col>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default EditTransportForm;
