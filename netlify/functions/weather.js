/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const APIKEY = '689e735828dc8c51f8922560330f00dc';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');

exports.handler = async (event) => {
  const { queryStringParameters } = event;
  const { lat, lon, unit } = queryStringParameters;

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=${
        unit === 'c' ? 'metric' : 'imperial'
      }`
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ data: res.data }),
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
