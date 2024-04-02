const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/predictions', (req, res) => {
    const predictions = [
        { date: "2025-01-01", prediction: "You'll learn something new that'll change your perspective." },
        { date: "2030-01-01", prediction: "A technology not yet invented will become your new hobby." }
    ];
    res.json(predictions);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
