# game-showcase-website
遊戲展示網站

# 🎮 遊戲展示網站

## 📌 介紹
這是一個基於 Nuxt 3 和 Node.js (Express) 的遊戲展示網站。

## 🚀 安裝與運行
### 後端
```bash
cd backend
npm install
node server.js

game-showcase-website/
│── backend/               # 後端 (Node.js + Express)
│   ├── server.js          # 主要後端伺服器
│   ├── routes/            # API 路由
│   │   ├── games.js       # 遊戲相關 API
│   ├── models/            # 數據模型
│   │   ├── Game.js        # 遊戲模型
│   ├── config/            # 配置
│   │   ├── db.js          # MongoDB 連接
│   ├── package.json       # 後端依賴
│── frontend/              # 前端 (Nuxt 3)
│   ├── pages/             # 頁面
│   │   ├── index.vue      # 首頁 (遊戲列表)
│   │   ├── game/[id].vue  # 遊戲詳情頁
│   ├── components/        # Vue 組件
│   │   ├── GameCard.vue   # 遊戲卡片
│   ├── store/             # Pinia 狀態管理
│   │   ├── gameStore.js   # 遊戲數據存儲
│   ├── nuxt.config.js     # Nuxt 配置
│   ├── package.json       # 前端依賴
│── .gitignore             # Git 忽略文件
│── README.md              # 專案說明文件
│── docker-compose.yml     # Docker 配置
