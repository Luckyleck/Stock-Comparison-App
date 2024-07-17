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
    const [responseGPT, setResponseGPT] = useState('')

    const handleCompare = async () => {
        try {
            const dataOne = await fetchStockData(stockOne.toUpperCase());
            setStockOneData(dataOne)
            const dataTwo = await fetchStockData(stockTwo.toUpperCase());
            setStockTwoData(dataTwo)

            const dataChatGPT = await fetchChatGPT(stockOne, stockTwo, investorType, investingHorizon);
            setResponseGPT(dataChatGPT)

        } catch (error) {
            console.error('Error fetching stock data:', error);
        }
    };

    console.log('Investor Type:', investorType);
    console.log('Investing Horizon:', investingHorizon);


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
                        />
                        <input
                            placeholder="stock"
                            value={stockTwo}
                            onChange={(e) => setStockTwo(e.target.value)}
                        />
                    </div>
                    <select required>
                        <option value="" disabled selected hidden>
                            Investment Profile
                        </option>
                        <option value="one">Option One</option>
                        <option value="two">Option Two</option>
                        <option value="three">Option Three</option>
                    </select>
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
            </div> */}
            <InvestorInfo onChange={setInvestorType} />
            <InvestingHorizon onChange={setInvestingHorizon} />
            <button onClick={handleCompare}>Compare</button>
            <ChatGPT responseGPT={responseGPT} />
            <Chart stockOneData={stockOneData} stockTwoData={stockTwoData} />
            <Stock stockOneData={stockOneData} stockTwoData={stockTwoData} />
        </div>
    );
}

export default App;
