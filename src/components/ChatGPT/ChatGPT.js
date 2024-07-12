import React, { useState, useEffect } from 'react';
const ChatGPT_API_KEY = process.env.REACT_APP_ChatGPT_API_KEY;

export const ChatGPT = ({ stockOneTicker, stockTwoTicker }) => {
    const [response, setResponse] = useState('');

    useEffect(() => {
        const fetchChatGPTResponse = async () => {
            const prompt = `I'm a risk averse investor with long term investment goals. 
                            What stock to invest 
                            ${stockOneTicker} or ${stockTwoTicker}?`;

            try {
                const result = await fetch(
                    'https://api.openai.com/v1/chat/completions',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer  ${ChatGPT_API_KEY}`,
                        },
                        body: JSON.stringify({
                            model: 'gpt-3.5-turbo',
                            messages: [{ role: 'user', content: prompt }],
                        }),
                    }
                );

                const data = await result.json();
                setResponse(data.choices[0].message.content);
            } catch (error) {
                console.error('Error fetching data from OpenAI API:', error);
            }
        };
        if (stockOneTicker && stockTwoTicker) {
            fetchChatGPTResponse();
        }
    }, [stockOneTicker, stockTwoTicker]);

    return (
        <div>
            <h2>ChatGPT Response:</h2>
            <p>{response}</p>
        </div>
    );
};

export default ChatGPT;
