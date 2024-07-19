import { useRef } from 'react';

const useScroll = (loadMoreSuggestions) => {
    const suggestionsRef = useRef(null);

    const handleScroll = () => {
        if (
            suggestionsRef.current &&
            suggestionsRef.current.scrollTop + suggestionsRef.current.clientHeight >=
                suggestionsRef.current.scrollHeight
        ) {
            loadMoreSuggestions();
        }
    };

    return {
        suggestionsRef,
        handleScroll,
    };
};

export default useScroll;