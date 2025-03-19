const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gameShowcase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB 連接成功'))
  .catch(err => console.log('❌ MongoDB 連接失敗', err));

module.exports = mongoose;
