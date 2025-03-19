const express = require('express');
const Game = require('../models/Game');

const router = express.Router();

// 獲取所有遊戲
router.get('/', async (req, res) => {
    const games = await Game.find();
    res.json(games);
});

// 新增遊戲
router.post('/', async (req, res) => {
    const newGame = new Game(req.body);
    await newGame.save();
    res.json({ message: '✅ 遊戲已添加', game: newGame });
});

module.exports = router;
