import React, { useState } from 'react';
const ChatGPT_API_KEY = process.env.REACT_APP_ChatGPT_API_KEY;

const ChatGPT = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const prompt = input;

        try {
            const result = await fetch(
                'https://api.openai.com/v1/chat/completions',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ChatGPT_API_KEY`,
                    },
                    body: JSON.stringify({
                        model: 'gpt-4',
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

    return (
        <div>
            <h1>Chat with GPT</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me anything..."
                />
                <button type="submit">Send</button>
            </form>
            <div>
                <h2>Response:</h2>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default ChatGPT;
