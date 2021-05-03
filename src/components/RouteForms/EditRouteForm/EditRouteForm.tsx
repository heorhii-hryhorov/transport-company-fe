import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label,
} from 'reactstrap';
import { editRouteRequest, getRoutes } from '../../../services/api';

const EditRouteForm: React.FC = () => {
  const [routes, setRoutes] = useState<any>([]);
  const retrieveRoutes = () => {
    getRoutes()
      .then((response: any) => {
        setRoutes(response.data);
      })
      .catch((e) => {
        alert(e);
      });
  };
  useEffect(() => {
    retrieveRoutes();
  }, []);

  const defaultFormState = {
    id: 'Select route id',
    startCity: '',
    endCity: '',
    distance: 0,
    departureDate: '',
    transportType: 'cargo',
    revenue: 0,
    arrivalDate: '',
    status: 'awaiting',
  };

  const handleRouteEdit = (data: any) => {
    const {
      id, startCity, endCity, distance, departureDate, transportType, revenue, arrivalDate, status,
    } = data;

    editRouteRequest({
      id, startCity, endCity, distance, departureDate, transportType, revenue, arrivalDate, status,
    })
      .then(() => alert('Edited route'))
      .catch((err) => alert(err));
  };
  return (
    <div>
      <h3 className="mb-3">Edit route</h3>
      <Formik initialValues={defaultFormState} onSubmit={handleRouteEdit}>
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
                  value={
                    values.id
                }
                  onChange={
                    handleChange
                }
                  onBlur={handleBlur}
                >
                  <option>Select route id</option>
                  {routes.map((route: any) => <option key={route.id}>{route.id}</option>)}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="startCity" sm={2}>
                Start City
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="startCity"
                  id="startCity"
                  placeholder="Enter start city"
                  value={values.startCity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="endCity" sm={2}>
                End City
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="endCity"
                  id="endCity"
                  placeholder="Enter end city"
                  value={values.endCity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="distance" sm={2}>Distance</Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="distance"
                  id="distance"
                  placeholder="Enter distance"
                  min="0"
                  value={values.distance}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="departureDate" sm={2}>Departure date</Label>
              <Col sm={10}>
                <Input
                  type="date"
                  name="departureDate"
                  id="departureDate"
                  placeholder="Enter departure date"
                  value={values.departureDate}
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
              <Label for="revenue" sm={2}>Revenue</Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="revenue"
                  id="revenue"
                  placeholder="Enter revenue"
                  min="0"
                  value={values.revenue}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="arrivalDate" sm={2}>Arrival date</Label>
              <Col sm={10}>
                <Input
                  type="date"
                  name="arrivalDate"
                  id="arrivalDate"
                  placeholder="Enter arrival date"
                  value={values.arrivalDate}
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
                  <option>awaiting</option>
                  <option>in progress</option>
                  <option>completed</option>
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

export default EditRouteForm;
