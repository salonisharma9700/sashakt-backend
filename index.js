const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const quizRoutes = require('./routes/quizRoute');
const gameLevelRoutes = require('./routes/gameprogress');
const userRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors({
//   origin: 'https://sashakt.vercel.app/',
//   credentials: true,
// }));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:8001'
}));

// Database connection setup
require('./db')();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/game',gameLevelRoutes)
app.use('/api/quiz',quizRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
