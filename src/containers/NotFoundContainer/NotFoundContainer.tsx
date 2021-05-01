import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './NotFoundContainer.module.css';

const NotFoundContainer: React.FC = () => (
  <Container>
    <Row>
      <Col xs="12" className={styles['not-found']}>
        <h1 className="text-warning">404</h1>
        <h3>Oops, The Page you are looking for can&apos;t be found!</h3>
      </Col>
    </Row>
  </Container>
);

export default NotFoundContainer;
