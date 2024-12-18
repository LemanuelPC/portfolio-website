const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Backend is working!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is connected!' });
});
