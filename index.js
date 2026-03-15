const express = require('express');
const path = require('path');
require('dotenv').config();
const chatRoutes = require('./Routes/chatRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'Public')));

app.use('/api', chatRoutes);

app.listen(PORT, () => {
    console.log(` Final Projek server berjalan di http://localhost:${PORT}`);
});
