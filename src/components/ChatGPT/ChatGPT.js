import React from 'react';
import PropTypes from 'prop-types';


export const ChatGPT = ({ responseGPT }) => {
    return (
        <div>
            <h2>ChatGPT Response:</h2>
            <p>{responseGPT}</p>
        </div>
    );
};

ChatGPT.propTypes = {
    responseGPT: PropTypes.string,
};


export default ChatGPT;
