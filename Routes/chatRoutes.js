const express = require('express');
const router = express.Router();
// Pastikan nama fungsi yang di-import sesuai dengan yang ada di aiService.js
const { generateRomanticResponse } = require('../Services/chatServices');

router.post('/chat', async (req, res) => {
    const { message } = req.body;
    
    // Validasi pesan dengan gaya bahasa yang lembut
    if (!message) {
        return res.status(400).json({ error: "Sayang, kamu belum mengetikkan pesan apapun untukku..." });
    }

    try {
        // Memanggil fungsi AI yang baru
        const reply = await generateRomanticResponse(message);
        res.json({ reply });
    } catch (error) {
        console.error("Error dari Gemini API:", error);
        // Pesan error jika terjadi gangguan teknis
        res.status(500).json({ 
            reply: "Maafkan aku ya sayang, sepertinya aku sedang sedikit pusing. Bisa tunggu sebentar lagi?" 
        });
    }
});

module.exports = router;