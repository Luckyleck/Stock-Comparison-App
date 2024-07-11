import React from 'react'
import PropTypes from 'prop-types';
import './chart.css';

export default function Chart(stockOneData, stockTwoData) {
  return (
    <div className="chart-container">
      <h1>Hello</h1>
    </div>
  )
}

Chart.propTypes = {
    stockOneData: PropTypes.object,
    stockTwoData: PropTypes.object,
};
