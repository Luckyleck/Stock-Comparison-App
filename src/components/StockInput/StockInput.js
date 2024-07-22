import React from 'react';
import PropTypes from 'prop-types';
import useAutocomplete from './useAutocomplete';
import useScroll from './useScroll';
import './StockInput.css' 

const StockInput = ({ stock, setStock, name }) => {
    const { displayedSuggestions, handleInputChange, handleSuggestionClick, loadMoreSuggestions, hasMore } = useAutocomplete(stock, setStock);
    const { suggestionsRef, handleScroll } = useScroll(loadMoreSuggestions);

    const formatStockTitle = (title) => {
        if (title.length > 50) {
            return `${title.slice(0, 50).toUpperCase()}...`;
        } else {
            return title.slice(0, 50).toUpperCase();
        }
    };

    return (
        <div className='stock_inputs_container'>
            <input className='stock_input' name={name} placeholder="stock" value={stock} onChange={handleInputChange} />
            {displayedSuggestions.length > 0 && (
                <div className="suggestions" onScroll={handleScroll} ref={suggestionsRef}>
                    <ul className="autocomplete-list">
                        {displayedSuggestions.map((stock) => (
                            <li key={stock.ticker} onClick={() => handleSuggestionClick(stock.ticker)}>
                                {stock.ticker} - {formatStockTitle(stock.title)}
                            </li>
                        ))}
                    </ul>
                    {hasMore && <div>Loading more...</div>}
                </div>
            )}
        </div>
    );
};

StockInput.propTypes = {
    stock: PropTypes.string.isRequired,
    setStock: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default StockInput;