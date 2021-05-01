import React from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';
import DeleteTransportForm from '../../components/TransportForms/DeleteTransportForm/DeleteTransportForm';

const DeleteTransportContainer: React.FC = () => (
  <Container>
    <Row>
      <Col xs="12">
        <DeleteTransportForm />
      </Col>
    </Row>
  </Container>
);

export default DeleteTransportContainer;
