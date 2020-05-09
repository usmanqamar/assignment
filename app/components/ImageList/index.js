import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { getThumbnailPath } from '../../utils/helper';

const ImageList = ({ images }) => (
  <Row>
    {images.length === 0 ? (
      <Col xs="12">
        <Alert variant="danger">No Image found</Alert>
      </Col>
    ) : (
      images.map(image => (
        <Col md={6} sm={12} lg={4} className="pb-4">
          <Card style={{ width: '320px' }} className="m-auto">
            <Card.Body>
              <Card.Text>{image.title}</Card.Text>
            </Card.Body>
            <Link to={`/home/${image.id}`}>
              <img
                className="m-auto"
                alt={image.title}
                src={getThumbnailPath(image)}
              />
            </Link>
          </Card>
        </Col>
      ))
    )}
  </Row>
);

ImageList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageList;
