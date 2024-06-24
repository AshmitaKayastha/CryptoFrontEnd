const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// POST endpoint for signup
app.post('/signup', (req, res) => {
    const { email, password } = req.body; // Assuming you send email and password from frontend

    // Simulate a successful signup (without database interaction)
    console.log('Received signup request:', { email, password });
    return res.json({ message: 'Signup successful' });
});

// Start server on port 8081
app.listen(8081, () => {
    console.log("Server is running on http://localhost:8081");
});
