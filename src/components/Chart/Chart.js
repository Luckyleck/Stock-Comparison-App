import React from 'react';
import PropTypes from 'prop-types';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import './chart.css';

function formatData(data) {
    if (!data || !data.results) return [];
    return data.results.map((item) => ({
        date: new Date(item.t).toLocaleDateString('en-US', { month: 'short' }),
        close: item.c,
    }));
}

export default function Chart({ stockOneData, stockTwoData }) {
    const stockOneFormattedData = formatData(stockOneData);
    const stockTwoFormattedData = formatData(stockTwoData);

    return (
        <div className="chart-container">
            <div className="chart">
                <h3>{stockOneData?.ticker}</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={stockOneFormattedData}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="date" />
                        <YAxis domain={['auto', 'auto']} />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="close"
                            stroke="#ff7300"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="chart">
                <h3>{stockTwoData?.ticker}</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={stockTwoFormattedData}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="date" />
                        <YAxis domain={['auto', 'auto']} />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="close"
                            stroke="#387908"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

Chart.propTypes = {
    stockOneData: PropTypes.object,
    stockTwoData: PropTypes.object,
};
