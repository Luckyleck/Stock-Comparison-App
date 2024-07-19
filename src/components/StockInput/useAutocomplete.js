import { useState, useEffect } from 'react';
import stockTickers from '../../assets/company_tickers.json';

const useAutocomplete = (_stock, setStock) => {
    const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);
    const [displayedSuggestions, setDisplayedSuggestions] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const BATCH_SIZE = 10;

    useEffect(() => {
        if (autocompleteSuggestions.length > 0) {
            setDisplayedSuggestions(autocompleteSuggestions.slice(0, BATCH_SIZE));
            setHasMore(autocompleteSuggestions.length > BATCH_SIZE);
        }
    }, [autocompleteSuggestions]);

    const handleInputChange = (event) => {
        const inputValue = event.target.value.toLowerCase();
        setStock(inputValue);

        if (inputValue.trim().length === 0) {
            setAutocompleteSuggestions([]);
            return;
        }

        const tickersArray = Object.keys(stockTickers).map((key) => stockTickers[key]);

        const filteredSuggestions = tickersArray.filter(
            (stock) =>
                stock.title.toLowerCase().includes(inputValue) ||
                stock.ticker.toLowerCase().includes(inputValue)
        );

        setAutocompleteSuggestions(filteredSuggestions);
    };

    const handleSuggestionClick = (ticker) => {
        setStock(ticker);
        setAutocompleteSuggestions([]);
        setDisplayedSuggestions([]);
    };

    const loadMoreSuggestions = () => {
        const currentLength = displayedSuggestions.length;
        const moreSuggestions = autocompleteSuggestions.slice(currentLength, currentLength + BATCH_SIZE);

        setDisplayedSuggestions((prev) => [...prev, ...moreSuggestions]);
        setHasMore(autocompleteSuggestions.length > currentLength + BATCH_SIZE);
    };

    return {
        displayedSuggestions,
        handleInputChange,
        handleSuggestionClick,
        loadMoreSuggestions,
        hasMore,
    };
};

export default useAutocomplete;
