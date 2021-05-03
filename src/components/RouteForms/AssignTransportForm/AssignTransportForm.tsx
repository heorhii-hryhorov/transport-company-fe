import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label,
} from 'reactstrap';
import { getRoutes, getTransports, assignTransportRequest } from '../../../services/api';

const AssignTransportForm: React.FC = () => {
  const [routes, setRoutes] = useState<any>([]);
  const [transports, setTransports] = useState<any>([]);
  const retrieveRoutes = () => {
    getRoutes()
      .then((response: any) => {
        setRoutes(response.data);
      })
      .catch((e) => {
        alert(e);
      });
  };
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
    retrieveRoutes();
  }, []);
  useEffect(() => {
    retrieveTransports();
  }, []);

  const defaultFormState = {
    routeId: 'Select route id',
    transportId: 'Select transport id',
  };

  const handleTransportAssign = (data: any) => {
    const {
      routeId,
      transportId,
    } = data;

    assignTransportRequest({
      routeId,
      transportId,
    })
      .then(() => alert('Assigned transport to route'))
      .catch((err) => alert(err));
  };
  return (
    <div>
      <h3 className="mb-3">Assign transport to route</h3>
      <Formik initialValues={defaultFormState} onSubmit={handleTransportAssign}>
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label for="routeId" sm={2}>
                Route ID
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="routeId"
                  id="routeId"
                  value={values.routeId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Select route id</option>
                  {routes.map((route: any) => (
                    <option key={route.id}>
                      {route.id}
                    </option>
                  ))}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="transportId" sm={2}>
                Transport ID
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="transportId"
                  id="transportId"
                  value={values.transportId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Select transport id</option>
                  {transports.map((transport: any) => (
                    <option key={transport.id}>
                      {transport.id}
                    </option>
                  ))}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">Assign</Button>
              </Col>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default AssignTransportForm;
