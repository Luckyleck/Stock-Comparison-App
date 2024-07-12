import './App.css';
import React from 'react';
import { useState } from 'react';
import Stock from './components/stock/Stock';
// import ChatGPT from './components/ChatGPT/oldChatGPT';
import { ChatGPT } from './components/ChatGPT/ChatGPT';
import { fetchStockData } from './components/stock/StockFetch';
import Chart from './components/Chart/Chart';

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
        <div className="main-container">
            <div className="content">
                <div className="left-panel">
                    <h1 id="title">.stock-comparison</h1>
                    <div className="stock-inputs">
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
                        <input
                            placeholder="Investment Style"
                            value={stockTwo}
                            onChange={(e) => setStockTwo(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* <div className="stockInputs">
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
            {stockOneData && stockTwoData && (
                <ChatGPT
                    stockOneTicker={stockOneData.ticker}
                    stockTwoTicker={stockTwoData.ticker}
                />
            )}
            <Stock stockOneData={stockOneData} stockTwoData={stockTwoData} />
            <Chart stockOneData={stockOneData} stockTwoData={stockTwoData} /> */}
        </div>
    );
}

export default App;
