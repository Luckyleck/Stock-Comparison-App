import './App.css';
import React from 'react';
import { useState } from 'react';
import Stock from './components/stock/Stock';
import ChatGPT from './components/ChatGPT/ChatGPT';
import { fetchStockData } from './components/stock/StockFetch';

function App() {
    const [stockOne, setStockOne] = useState('');
    const [stockTwo, setStockTwo] = useState('');
    const [stockOneData, setStockOneData] = useState(null);
    const [stockTwoData, setStockTwoData] = useState(null);

    const handleCompare = async () => {
        try {
            const dataOne = await fetchStockData(stockOne.toUpperCase());
            setStockOneData(dataOne);
            const dataTwo = await fetchStockData(stockTwo.toUpperCase());
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
            <button onClick={handleCompare}>Compare</button>
            <Stock stockOneData={stockOneData} stockTwoData={stockTwoData} />
            <ChatGPT />
        </div>
    );
}

export default App;
