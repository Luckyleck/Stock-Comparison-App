import React from 'react';
import './stock.css';
import PropTypes from 'prop-types';

const Stock = ({ stockOneData, stockTwoData }) => {
    const renderStockDetails = (stockData) => {
        if (!stockData) {
            return <p>No data available.</p>;
        }

        const {
            c, // The close price for the symbol in the given time period.
            h, // The highest price for the symbol in the given time period.
            l, // The lowest price for the symbol in the given time period.
            n, // The number of transactions in the aggregate window.
            o, // The open price for the symbol in the given time period.
            t, // The Unix Msec timestamp for the start of the aggregate window.
            v, // The trading volume of the symbol in the given time period.
            vw, // The volume weighted average price.
            otc, // Whether or not this aggregate is for an OTC ticker. This field will be left off if false.
        } = stockData.results[0];

        return (
            <div>
                <h2>{stockData.ticker}</h2>
                <p>Close Price: {c}</p>
                <p>Highest Price: {h}</p>
                <p>Lowest Price: {l}</p>
                <p>Number of Transactions: {n}</p>
                <p>Open Price: {o}</p>
                <p>Volume: {v}</p>
                <p>Volume Weighted Average Price: {vw}</p>
                {otc && <p>OTC Ticker</p>}
                <p>Timestamp: {new Date(t).toLocaleString()}</p>
            </div>
        );
    };

    return (
        <div className="stock-container">
            <div className="stock-column">
                {renderStockDetails(stockOneData)}
            </div>
            <div className="stock-column">
                {renderStockDetails(stockTwoData)}
            </div>
        </div>
    );
};

Stock.propTypes = {
    stockOneData: PropTypes.object,
    stockTwoData: PropTypes.object,
};

export default Stock;
