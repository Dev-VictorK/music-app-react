const SpotifyClient = require('./SpotifyClient');

const API_TOKEN = 'your_token_here';

exports.handler = async function(event, context) {
  const token = event.queryStringParameters.token;
  const idsParam = event.queryStringParameters.ids;

  if (!token || token !== API_TOKEN) {
    return {
      statusCode: 403,
      body: JSON.stringify({ success: false, error: 'Invalid or missing token' }),
    };
  }

  if (!idsParam) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: 'Missing ids query parameter' }),
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
};
