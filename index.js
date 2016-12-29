const zombies = require('./zombies.json');
const express = require('express');

zombies.forEach(zombie => {
    const app = express();
    zombie.routes.forEach(route => {
        switch (route.method) {
            case 'GET':
                app.get(route.path, (request, response) => {
                    response.status(route.response.status)
                            .json(route.response.data);
                });
                break;
            case 'POST':
                app.post(route.path, (request, response) => {
                    response.status(route.response.status)
                            .json(route.response.data);
                });
                break;
            case 'PUT':
                app.put(route.path, (request, response) => {
                    response.status(route.response.status)
                            .json(route.response.data);
                });
                break;
            case 'DELETE':
                app.delete(route.path, (request, response) => {
                    response.status(route.response.status)
                            .json(route.response.data);
                });
                break;
            case 'OPTIONS':
                app.options(route.path, (request, response) => {
                    response.status(route.response.status)
                            .json(route.response.data);
                });
                break;
        }
    });
    app.listen(zombie.port, console.log('Zombie ' + zombie.port + ' is walking'));
});