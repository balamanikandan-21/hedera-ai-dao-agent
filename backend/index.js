require('dotenv').config();
const express = require('express');
const { OpenAI } = require('openai'); // Make sure openai is installed
const app = express();

const PORT = process.env.PORT || 4000;

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure this is set in your .env
});

app.use(express.json());

// Default test route
app.get('/', (req, res) => {
  res.send('🧠 Hello from Hedera AI DAO Decision Engine backend!');
});

// ✅ This is your /api/summary POST route
app.post('/api/summary', async (req, res) => {
  const { content } = req.body;

  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content }],
      model: "gpt-4" // or "gpt-3.5-turbo"
    });

    const summary = response.choices[0].message.content;
    res.json({ summary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate summary." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
