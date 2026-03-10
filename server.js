const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allows your extension to connect
app.use(express.json());

const VALID_KEYS = ["A9FQ-7XK3-M2X8", "Q7M9-F3KA-XZ92", "MZQ7-9XKF-3A28"];

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
