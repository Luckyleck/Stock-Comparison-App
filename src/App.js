import './App.css';
import React from 'react';
import { useState } from 'react';
import Stock from './components/stock/Stock';
import { fetchStockData } from './components/stock/StockFetch';

function App() {
    const [stockOne, setStockOne] = useState('');
    const [stockTwo, setStockTwo] = useState('');
    const [stockOneData, setStockOneData] = useState(null);
    const [stockTwoData, setStockTwoData] = useState(null);

    const [multiplier, setMultiplier] = useState(1);
    const [timespan, setTimespan] = useState('day');
    const [fromDate, setFromDate] = useState('2023-01-09');
    const [toDate, setToDate] = useState('2023-01-09');

    const handleCompare = async () => {
        try {
            const dataOne = await fetchStockData(stockOne.toUpperCase(), multiplier, timespan, fromDate, toDate);
            setStockOneData(dataOne);
            const dataTwo = await fetchStockData(stockTwo.toUpperCase(), multiplier, timespan, fromDate, toDate);
            setStockTwoData(dataTwo);
        } catch (error) {
            console.error('Error fetching stock data:', error);
        }
    };

    return (
        <div className="main">
            <div className="stockInputs">
                <input
                    placeholder="Stock 1"
                    value={stockOne}
                    onChange={(e) => setStockOne(e.target.value)}
                />
                <input
                    placeholder="Stock 2"
                    value={stockTwo}
                    onChange={(e) => setStockTwo(e.target.value)}
                />
            </div>
            <div className="modifiers">
                <input
                    placeholder="Multiplier"
                    value={multiplier}
                    onChange={(e) => setMultiplier(e.target.value)}
                />
                <select
                    value={timespan}
                    onChange={(e) => setTimespan(e.target.value)}
                >
                    <option value="second">Second</option>
                    <option value="minute">Minute</option>
                    <option value="hour">Hour</option>
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="quarter">Quarter</option>
                    <option value="year">Year</option>
                </select>
                <input
                    type="date"
                    placeholder="From Date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="To Date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                />
            </div>
            <button onClick={handleCompare}>Compare</button>
            <Stock stockOneData={stockOneData} stockTwoData={stockTwoData} />
        </div>
    );
}

export default App;
