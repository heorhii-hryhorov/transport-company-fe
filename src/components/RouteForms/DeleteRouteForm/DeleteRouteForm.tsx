import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label,
} from 'reactstrap';
import { deleteRouteRequest, getRoutes } from '../../../services/api';

const DeleteRouteForm: React.FC = () => {
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
  };

  const handleRouteDelete = (data: any) => {
    const {
      id,
    } = data;

    deleteRouteRequest({
      id,
    })
      .then(() => alert('Deleted route'))
      .catch((err) => alert(err));
  };
  return (
    <div>
      <h3 className="mb-3">Delete route</h3>
      <Formik initialValues={defaultFormState} onSubmit={handleRouteDelete}>
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
                  {routes.map((route: any) => <option key={route.id}>{route.id}</option>)}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button type="submit" color="danger">Delete</Button>
              </Col>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DeleteRouteForm;
