import { useState, useEffect } from 'react';
import { fetchStockData } from './StockFetch.js';

function Stock() {
    const [ticker, setTicker] = useState('GOOG');
    const [stockData, setStockData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchStockData(ticker);
                setStockData(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            }
        };

        getData();
    }, [ticker]);

    return (
        <div className="App">
            <h1>Stock Data</h1>
            <input
                type="text"
                value={ticker}
                onChange={(e) => setTicker(e.target.value.toUpperCase())}
            />
            {error && <p>{error}</p>}
            {stockData && (
                <div>
                    <h2>{stockData.symbol}</h2>
                    {stockData.results && <p>Price: ${stockData.results[0].c}</p>}
                </div>
            )}
        </div>
    );
}

export default Stock;
