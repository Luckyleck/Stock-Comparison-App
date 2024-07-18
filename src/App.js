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
import stockTickers from './assets/company_tickers.json';

function App() {
    const [stockOne, setStockOne] = useState('');
    const [stockTwo, setStockTwo] = useState('');
    const [stockOneData, setStockOneData] = useState(null);
    const [stockTwoData, setStockTwoData] = useState(null);
    const [investorType, setInvestorType] = useState('risk averse');
    const [investingHorizon, setInvestingHorizon] = useState('long-term');
    const [responseGPT, setResponseGPT] = useState('');
    const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);

    const handleCompare = async () => {
        try {
            const dataOne = await fetchStockData(stockOne.toUpperCase());
            setStockOneData(dataOne);
            const dataTwo = await fetchStockData(stockTwo.toUpperCase());
            setStockTwoData(dataTwo);

            const dataChatGPT = await fetchChatGPT(
                stockOne,
                stockTwo,
                investorType,
                investingHorizon
            );
            setResponseGPT(dataChatGPT);
        } catch (error) {
            console.error('Error fetching stock data:', error);
        }
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value.toLowerCase();
        if (inputValue.trim().length === 0) {
            setAutocompleteSuggestions([]);
            return;
        }

        const tickersArray = Object.keys(stockTickers).map(
            (key) => stockTickers[key]
        );

        const filteredSuggestions = tickersArray.filter(
            (stock) =>
                stock.title.toLowerCase().includes(inputValue) ||
                stock.ticker.toLowerCase().includes(inputValue)
        );

        setAutocompleteSuggestions(filteredSuggestions);
    };

    return (
        <div className="main-container">
            <div className="main-content">
                <div className="header">
                    <h1 style={{ fontSize: '6em' }}>let AI choose.</h1>
                    <h1 style={{ fontSize: '3em' }}>
                        compare stocks and find your best investment
                    </h1>
                    <div className="created-by">
                        <h2>created by alex and olga.</h2>
                        <div
                            style={{
                                display: 'flex',
                                gap: '20px',
                                justifyContent: 'center',
                            }}
                        >
                            <a href="https://github.com/luckyleck">
                                Alex&apos;s Github
                            </a>
                            <a href="https://github.com/olga-bessonova">
                                Olga&apos;s Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className="selection">
                    <div className="stock-inputs">
                        <input
                            placeholder="stock"
                            value={stockOne}
                            onChange={(e) => setStockOne(e.target.value)}
                            onInput={handleInputChange}
                        />
                        <input
                            placeholder="stock"
                            value={stockTwo}
                            onChange={(e) => setStockTwo(e.target.value)}
                            onInput={handleInputChange}
                        />
                    </div>
                    {/* Autocomplete suggestions */}
                    {autocompleteSuggestions.length > 0 && (
                        <div className="suggestions">
                            <ul className="autocomplete-list">
                                {autocompleteSuggestions.map((stock) => (
                                    <li key={stock.ticker}>
                                        {stock.ticker} - {stock.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="invest_options">
                        <InvestorInfo setInvestorType={setInvestorType} />
                        <InvestingHorizon
                            setInvestingHorizon={setInvestingHorizon}
                        />
                    </div>
                </div>

                <button onClick={handleCompare}>Compare</button>
                <ChatGPT responseGPT={responseGPT} />
                <Chart
                    stockOneData={stockOneData}
                    stockTwoData={stockTwoData}
                />
                <Stock
                    stockOneData={stockOneData}
                    stockTwoData={stockTwoData}
                />
            </div>
        </div>
    );
}

export default App;
