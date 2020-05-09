import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectImage,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadImage } from './actions';
import reducer from './reducer';
import saga from './saga';
import LoadingIndicator from '../../components/LoadingIndicator';
import 'react-toggle/style.css';

const key = 'detail';

const GetVideo = ({ image }) => (
  <video controls className="m-auto d-block">
    <source src={image.link} type="video/mp4" />
    Your browser does not support the video tag
  </video>
);
export function Detail({ image, match: { params }, loading, fetchImage }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    const { id } = params;
    fetchImage(id);
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Gallery" />
      </Helmet>
      <div>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <Container>
            <Row>
              <Col xs={12}>
                <div className="mb-2">
                  {image.type === 'video/mp4' ? (
                    <GetVideo image={image} />
                  ) : (
                    <img
                      alt={image.title}
                      className="m-auto d-block"
                      src={image.link}
                    />
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center h3">{image.title}</Col>
            </Row>
            <Row>
              <Col>
                <p className="h5">Ups</p>
              </Col>
              <Col>{image.ups}</Col>
            </Row>

            <Row>
              <Col>
                <p className="h5">Downs</p>
              </Col>
              <Col>{image.downs}</Col>
            </Row>

            <Row>
              <Col>
                <p className="h5">Score</p>
              </Col>
              <Col>{image.score}</Col>
            </Row>
          </Container>
        )}
      </div>
    </>
  );
}

Detail.propTypes = {
  fetchImage: PropTypes.func.isRequired,
  image: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  match: PropTypes.object.isRequired,
};

GetVideo.propTypes = {
  image: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  image: makeSelectImage(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchImage: id => dispatch(loadImage(id)),
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
)(Detail);
