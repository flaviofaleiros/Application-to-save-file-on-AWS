const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send('Ola Flávio')
});

app.listen(process.env.PORT || 3000);