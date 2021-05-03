import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label,
} from 'reactstrap';
import { deleteTransportRequest, getTransports } from '../../../services/api';

const DeleteTransportForm: React.FC = () => {
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
  };

  const handleTransportDelete = (data: any) => {
    const {
      id,
    } = data;

    deleteTransportRequest({
      id,
    })
      .then(() => alert('Deleted transport'))
      .catch((err) => alert(err));
  };
  return (
    <div>
      <h3 className="mb-3">Delete transport</h3>
      <Formik initialValues={defaultFormState} onSubmit={handleTransportDelete}>
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
                <Button type="submit" color="danger">Delete</Button>
              </Col>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DeleteTransportForm;
