const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allows your extension to connect
app.use(express.json());

const VALID_KEYS = ["B8WR-5PL2-K4M7", "X3V9-D7NB-FT61", "G6HJ-4QX2-R9P5", "Z1KS-8WY7-C3V4", "N5TR-9FL3-M2K6"];

app.post('/verify', (req, res) => {
    const { key } = req.body;
    if (VALID_KEYS.includes(key)) {
        res.json({ success: true, message: "Activated!" });
    } else {
        res.status(401).json({ success: false, message: "Invalid key" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
