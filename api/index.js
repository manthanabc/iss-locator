const app = require('express')();

app.post('/api', (req, res) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    
    //database.insert(data);
    //console.log(`Data saved to database: "${filedb}"`);

    response.json(data);
});

module.exports = app;

