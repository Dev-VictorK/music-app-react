export async function handler(event) {
  console.log(event.body);
  const API_TOKEN = 'BQB03nT4j76U220FuxUY-Haq-qHWKireW6OvirFNdFLk5fI5U-is9U0Wbc9xvvuGHpBJzP9IwJb2TKsffl2lU918g5SjaEjbJAy3gPqvAn1dvjBivYMx_BHHFmvKcE7c-HgruvpoVeA';
  const FAKE_DELAY = 2000;
  const { token } = JSON.parse(event.body || '{}');
  await new Promise(resolve => setTimeout(resolve, FAKE_DELAY));
  if (!token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing token' }),
    };
  }

  // Replace this with your real check
  //const valid = token === process.env.API_TOKEN;

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      token: API_TOKEN
    })
  };
}
