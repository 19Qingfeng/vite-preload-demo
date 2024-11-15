import express from 'express';

const app = express();

// Remix fingerprints its assets so we can cache forever.
app.use('/', express.static('dist', { immutable: true, maxAge: '1y' }));

app.listen(3000, () => {
  console.log('server start on 3000');
});
