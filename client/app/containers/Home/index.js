import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import {
  makeSelectImages,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadImages } from './actions';
import reducer from './reducer';
import saga from './saga';
import LoadingIndicator from '../../components/LoadingIndicator';
import 'react-toggle/style.css';
import Filters from '../../components/Filters';
import ImageList from '../../components/ImageList';

const key = 'home';

export function Home({ images, loading, fetchImages }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [filter, setFilter] = useState({
    section: 'hot',
    sort: 'viral',
    window: 'day',
    isViral: false,
  });

  useEffect(() => {
    fetchImages(filter);
  }, []);

  const onFilterChange = (selected, type) => {
    const updatedFilter = { ...filter, [type]: selected };
    fetchImages(updatedFilter);
    setFilter(updatedFilter);
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Gallery" />
      </Helmet>
      <div>
        <Filters filter={filter} onFilterChange={onFilterChange} />
        {loading ? <LoadingIndicator /> : <ImageList images={images} />}
      </div>
    </>
  );
}

Home.propTypes = {
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
    fetchImages: payload => dispatch(loadImages(payload)),
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
