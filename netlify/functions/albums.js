const SpotifyClient = require('./SpotifyClient.js');


const API_TOKEN = 'BQB03nT4j76U220FuxUY-Haq-qHWKireW6OvirFNdFLk5fI5U-is9U0Wbc9xvvuGHpBJzP9IwJb2TKsffl2lU918g5SjaEjbJAy3gPqvAn1dvjBivYMx_BHHFmvKcE7c-HgruvpoVeA';

export async function handler(event, context) {
  const token = event.queryStringParameters.token;
  const idsParam = event.queryStringParameters.ids;

  if (!token || token !== API_TOKEN) {
    return {
      statusCode: 403,
      body: JSON.stringify({
        success: false,
        error: 'Invalid or missing token'
      }),
    };
  }

  if (!idsParam) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        error: 'Missing ids query parameter',
      }),
    };
  }

  const albumIds = idsParam.split(',');

  try {
    const albums = await SpotifyClient.getAlbums(albumIds);
    return {
      statusCode: 200,
      body: JSON.stringify(albums),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'There was an error when interfacing with Spotify',
        error: error.message,
      }),
    };
  }
}
