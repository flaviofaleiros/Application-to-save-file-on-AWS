const routes = require('express').Router();


routes.get('/', (request, response) => {
    return response.json({ id: 1, Nome: "Flávio Augusto Faleiros", idade: 37})
});

module.exports = routes;