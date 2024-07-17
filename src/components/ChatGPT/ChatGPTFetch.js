// eslint-disable-next-line no-undef
const ChatGPT_API_KEY = process.env.REACT_APP_ChatGPT_API_KEY;

export const fetchChatGPT = async (
    stockOneTicker,
    stockTwoTicker,
    investorType,
    investingHorizon
) => {
    const prompt = `I'm a ${investorType} investor with ${investingHorizon} investment goals. 
                  What stock to invest 
                  ${stockOneTicker} or ${stockTwoTicker}? Answer should be under 100 words`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${ChatGPT_API_KEY}`,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to fecth chatGPT response');
    }

    const data = await response.json();
    return data.choices[0].message.content;
};
