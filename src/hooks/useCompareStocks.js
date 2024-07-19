import { useState } from 'react';
import { fetchStockData } from '../components/stock/StockFetch';
import { fetchChatGPT } from '../components/ChatGPT/ChatGPTFetch';

const useCompareStocks = () => {
    const [stockOneData, setStockOneData] = useState(null);
    const [stockTwoData, setStockTwoData] = useState(null);
    const [responseGPT, setResponseGPT] = useState('');

    const handleCompare = async (stockOne, stockTwo, investorType, investingHorizon) => {
        try {
            const dataOne = await fetchStockData(stockOne.toUpperCase());
            setStockOneData(dataOne);
            const dataTwo = await fetchStockData(stockTwo.toUpperCase());
            setStockTwoData(dataTwo);

            const dataChatGPT = await fetchChatGPT(stockOne, stockTwo, investorType, investingHorizon);
            setResponseGPT(dataChatGPT);
        } catch (error) {
            console.error('Error fetching stock data:', error);
        }
    };

    return {
        stockOneData,
        stockTwoData,
        responseGPT,
        handleCompare,
    };
};

export default useCompareStocks;
