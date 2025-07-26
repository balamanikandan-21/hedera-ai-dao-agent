require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Default GET route
app.get('/', (req, res) => {
  res.send('🧠 Hello from Hedera AI DAO Decision Engine backend!');
});

// Add this new POST route
app.post('/api/summary', (req, res) => {
  const { content } = req.body;

  // Dummy response for now
  res.json({ summary: `You sent: ${content}` });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
