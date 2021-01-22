
const express = require('express');
const app = express();

// setup the rate route
const route = require('./routes/index');


app.get('/api', (req, res) => {
    res.send('<h1>Backend assignment done<br/> by Babatunde Adenrele</h1>')
});

// fill rate route for the express application
app.use('/api', route);

// setup port for the app
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is running on port ${port}`));