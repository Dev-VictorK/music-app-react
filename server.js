import express from 'express';
import morgan from 'morgan';

import SpotifyClient from './SpotifyClient.js';

const app = express();

app.set('port', (process.env.API_PORT || 3001));

if (process.env.NODE_ENV !== 'TEST') {
  app.use(morgan('combined'));
}

// A fake API token our server validates
export const API_TOKEN = 'BQB03nT4j76U220FuxUY-Haq-qHWKireW6OvirFNdFLk5fI5U-is9U0Wbc9xvvuGHpBJzP9IwJb2TKsffl2lU918g5SjaEjbJAy3gPqvAn1dvjBivYMx_BHHFmvKcE7c-HgruvpoVeA';


const extractToken = (req) => (
  req.query.token
);

const authenticatedRoute = ((req, res, next) => {
  const token = extractToken(req);

  if (token) {
    if (token === API_TOKEN) {
      return next();
    } else {
      return res.status(403).json({
        success: false,
        error: 'Invalid token provided',
      });
    }
  } else {
    return res.status(403).json({
      success: false,
      error: 'No token provided. Supply token as query param `token`',
    });
  }
});

app.get('/api/check_token', (req, res) => {
  const token = extractToken(req);

  if (token) {
    if (token === API_TOKEN) {
      return res.json({ valid: true });
    } else {
      return res.json({ valid: false });
    }
  } else {
    return res.status(400).json({
      valid: false,
      error: 'No token found in `Authorization` header',
    });
  }
});

app.get('/api/albums', authenticatedRoute, (req, res) => {
  const albumIds = req.query.ids.split(',');

  SpotifyClient.getAlbums(albumIds).then((albums) => (
    res.json(albums)
  )).catch((error) => (
    res.status(500).json({
      success: false,
      message: 'There was an error when interfacing with Spotify',
      error: error,
    })
  ));
});

// Make things more noticeable in the UI by introducing a fake delay
// to logins
const FAKE_DELAY = 2000; // ms
app.post('/api/login', (req, res) => {
  setTimeout(() => (
    res.json({
      success: true,
      token: API_TOKEN,
    })
  ), FAKE_DELAY);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});


export default app;
