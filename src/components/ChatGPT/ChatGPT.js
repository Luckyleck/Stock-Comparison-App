import React from 'react';
import PropTypes from 'prop-types';

export const ChatGPT = ({ stockOneTicker, stockTwoTicker, investorType, investingHorizon }) => {
    const [response, setResponse] = useState('');

    useEffect(() => {
        const fetchChatGPTResponse = async () => {
            const prompt = `I'm a ${investorType} investor with ${investingHorizon} investment goals. 
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
}



ChatGPT.propTypes = {
    responseGPT: PropTypes.string,
};


export default ChatGPT;
