exports.handler = async function handler(event, context) {
  const token = event.queryStringParameters.token;
  const API_TOKEN = 'BQB03nT4j76U220FuxUY-Haq-qHWKireW6OvirFNdFLk5fI5U-is9U0Wbc9xvvuGHpBJzP9IwJb2TKsffl2lU918g5SjaEjbJAy3gPqvAn1dvjBivYMx_BHHFmvKcE7c-HgruvpoVeA';

  if (!token) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        valid: false,
        error: 'No token found in query string',
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      valid: token === API_TOKEN,
    }),
  };
}
