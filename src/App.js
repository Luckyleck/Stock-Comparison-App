import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Stock from './components/stock/Stock';
import StockInput from './components/StockInput/StockInput';
import ChatGPT from './components/ChatGPT/ChatGPT';
import Chart from './components/Chart/Chart';
import InvestorInfo from './components/InvestorInfo/InvestorInfo';
import InvestingHorizon from './components/InvestingHorizon/InvestingHorizon';
import useCompareStocks from './hooks/useCompareStocks';

function App() {
    const [stockOne, setStockOne] = useState('');
    const [stockTwo, setStockTwo] = useState('');
    const [investorType, setInvestorType] = useState('risk averse');
    const [investingHorizon, setInvestingHorizon] = useState('long-term');

    const { stockOneData, stockTwoData, responseGPT, handleCompare } = useCompareStocks();

    const handleCompareClick = () => {
        handleCompare(stockOne, stockTwo, investorType, investingHorizon);
    };

    return (
        <div className="main-container">
            <div className="main-content">
                <Header />
                <div className="selection">
                    <div className="stock-inputs">
                        <StockInput
                            stock={stockOne}
                            setStock={setStockOne}
                            name="stockOne"
                        />
                        <StockInput
                            stock={stockTwo}
                            setStock={setStockTwo}
                            name="stockTwo"
                        />
                    </div>
                    <div className="invest_options">
                        <InvestorInfo setInvestorType={setInvestorType} />
                        <InvestingHorizon setInvestingHorizon={setInvestingHorizon} />
                    </div>
                </div>

                <button onClick={handleCompareClick}>Compare</button>
                <ChatGPT responseGPT={responseGPT} />
                <Chart stockOneData={stockOneData} stockTwoData={stockTwoData} />
                <Stock stockOneData={stockOneData} stockTwoData={stockTwoData} />

                <Footer />
            </div>
        </div>
    );
}

export default App;
