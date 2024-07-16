import './App.css';
import React from 'react';
import { useState } from 'react';
import Stock from './components/stock/Stock';
// import ChatGPT from './components/ChatGPT/oldChatGPT';
import { ChatGPT } from './components/ChatGPT/ChatGPT';
import { fetchStockData } from './components/stock/StockFetch';
import { fetchChatGPT } from './components/ChatGPT/ChatGPTFetch';
import Chart from './components/Chart/Chart';
import InvestorInfo from './components/InvestorInfo/InvestorInfo';
import InvestingHorizon from './components/InvestingHorizon/InvestingHorizon';

function App() {
    const [stockOne, setStockOne] = useState('');
    const [stockTwo, setStockTwo] = useState('');
    const [stockOneData, setStockOneData] = useState(null);
    const [stockTwoData, setStockTwoData] = useState(null);
    const [investorType, setInvestorType] = useState('risk averse');
    const [investingHorizon, setInvestingHorizon] = useState('long-term');

    const handleCompare = async () => {
        try {
            const dataOne = await fetchStockData(stockOne.toUpperCase());
            setStockOneData(dataOne)
            const dataTwo = await fetchStockData(stockTwo.toUpperCase());
            setStockTwoData(dataTwo)

            const dataChatGPT = await fetchChatGPT(stockOne, stockTwo);
            setResponseGPT(dataChatGPT)

        } catch (error) {
            console.error('Error fetching stock data:', error);
        }
    };

    return (
        <div className="main">
            <InvestorInfo />
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
            <InvestorInfo onChange={setInvestorType} />
            <InvestingHorizon onChange={setInvestingHorizon} />
            <button onClick={handleCompare}>Compare</button>
            {stockOneData && stockTwoData && (
                <ChatGPT
                    stockOneTicker={stockOneData.ticker}
                    stockTwoTicker={stockTwoData.ticker}
                    investorType={investorType}
                    investingHorizon={investingHorizon}
                />
            )}
            <Stock stockOneData={stockOneData} stockTwoData={stockTwoData} />
            <Chart stockOneData={stockOneData} stockTwoData={stockTwoData} />
        </div>
    );
}

export default App;
