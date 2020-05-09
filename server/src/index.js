import app from './app';

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  try {
    // eslint-disable-next-line no-console
    console.log(`🚀 The server is running at http://localhost:${PORT}`);
  } catch (e) {
    console.log('Error', e);
  }
});
