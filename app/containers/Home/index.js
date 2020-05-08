/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Card } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';
import {
  makeSelectImages,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadImages } from './actions';
import reducer from './reducer';
import saga from './saga';
import LoadingIndicator from '../../components/LoadingIndicator';
import { getThumbanilPath } from '../../utils/helper';

const key = 'home';

export function Home({ images, loading, error, fetchImages }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Gallery" />
      </Helmet>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <div>
          <Nav className="mb-2" variant="pills" defaultActiveKey="hot"   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
          <Nav.Item>
              <Nav.Link eventKey="hot">Hot</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="top">Top</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="user">User</Nav.Link>
            </Nav.Item>
          </Nav>
          <Row>
            {images.length === 0 ? (
              <Col xs="12">
                <Alert variant="danger">No Image found</Alert>
              </Col>
            ) : (
              images.map(image => (
                <Col md={6} sm={12} lg={4} className="pb-4">
                  <Card style={{ width: '320px' }}>
                    <a href="">
                      <img alt={image.title} src={getThumbanilPath(image)} />
                    </a>
                    <Card.Body>
                      <Card.Text>{image.title}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </div>
      )}
    </>
  );
}

Home.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  fetchImages: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  images: makeSelectImages(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchImages: () => dispatch(loadImages()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withRouter,
  memo,
)(Home);
