const express = require('express');
const mongoose = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const gameRoutes = require('./routes/games');
app.use('/api/games', gameRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 伺服器運行於 http://localhost:${PORT}`));
