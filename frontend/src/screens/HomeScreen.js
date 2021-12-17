import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

function h1() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col Key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default h1;
