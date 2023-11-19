/* eslint-disable @typescript-eslint/no-var-requires */
// export {};
const APIKEY = '689e735828dc8c51f8922560330f00dc';
// eslint-disable-next-line no-undef
const axios = require('axios');

// eslint-disable-next-line no-undef
exports.handler = async (event) => {
  const { queryStringParameters } = event;
  const { search } = queryStringParameters;

  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${APIKEY}`
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ data: response.data }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
