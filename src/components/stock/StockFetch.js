// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_POLYGON_API_KEY;
// eslint-disable-next-line no-undef
const POLYGON_URL = process.env.REACT_APP_POLYGON_URL;

// export const fetchStockData = async (ticker) => {
//     const multiplier = 1;
//     const timespan = 'day';
//     const from = '2023-01-09';
//     const to = '2023-01-09';
//     const response = await fetch(
//         // `${BASE_URL}/v1/last/stocks/${ticker}?apiKey=${API_KEY}`
//         // `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-02-10?adjusted=true&sort=asc&apiKey=${API_KEY}`

//         `${POLYGON_URL}/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}?adjusted=true&sort=asc&apiKey=${API_KEY}`
//     );

//     if (!response.ok) {
//         throw new Error('Failed to fetch stock data');
//     }
//     const data = await response.json();
//     console.log(data);
//     return data;
// };

export const fetchStockData = async (ticker) => {
    const multiplier = 1;
    const timespan = 'month';

    const toDate = new Date();
    const fromDate = new Date();
    fromDate.setFullYear(toDate.getFullYear() - 1);

    const to = toDate.toISOString().split('T')[0];
    const from = fromDate.toISOString().split('T')[0];

    const response = await fetch(
        `${POLYGON_URL}/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}?adjusted=true&sort=asc&apiKey=${API_KEY}`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch stock data');
    }
    const data = await response.json();
    data['to'] = to;
    data['from'] = from;
    console.log(data);
    return data;
};
