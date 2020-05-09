import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Toggle from 'react-toggle';

const Filters = ({ filter, onFilterChange }) => (
  <>
    <Row className="justify-content-between mb-4 ">
      <Col sm={12} md={6} lg={4} >
        <Nav
          className="mb-2"
          variant="pills"
          defaultActiveKey="hot"
          onSelect={selectedKey => onFilterChange(selectedKey, 'section')}
        >
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
      </Col>
      <Col sm={12} md={6} lg={4} >
        <Form.Control
          as="select"
          onChange={ev => onFilterChange(ev.target.value, 'sort')}
        >
          <option value="viral">Viral</option>
          <option value="top">Top</option>
          <option value="time">Time</option>
          <option value="rising">Rising</option>
        </Form.Control>
      </Col>
      <Col className="text-lg-right mt-2" sm={12} md={6} lg={4} >
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="mr-2">Include Viral</label>
        <Toggle
          className="toggler"
          checked={filter.isViral}
          onChange={() => onFilterChange(!filter.isViral, 'isViral')}
        />
      </Col>
    </Row>
    <Row
      className={`justify-content-between mb-4 ${
        filter.section !== 'top' ? 'd-none' : ''
      }`}
    >
      <Col>
        <Nav
          className="mb-2"
          variant="pills"
          defaultActiveKey="day"
          onSelect={selectedKey => onFilterChange(selectedKey, 'window')}
        >
          <Nav.Item>
            <Nav.Link eventKey="day">Day</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="week">Week</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="month">Month</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="year">Year</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="all">All</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  </>
);

Filters.propTypes = {
  filter: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filters;
