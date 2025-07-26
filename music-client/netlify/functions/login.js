exports.handler = async function handler(event, context) {
  const FAKE_DELAY = 2000;
  const API_TOKEN = 'BQB03nT4j76U220FuxUY-Haq-qHWKireW6OvirFNdFLk5fI5U-is9U0Wbc9xvvuGHpBJzP9IwJb2TKsffl2lU918g5SjaEjbJAy3gPqvAn1dvjBivYMx_BHHFmvKcE7c-HgruvpoVeA';

  await new Promise(resolve => setTimeout(resolve, FAKE_DELAY));

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      token: API_TOKEN
    })
  };
}
