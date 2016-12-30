const zombies = require('./zombies.json');
const express = require('express');

zombies.forEach(zombie => {
    let app = express();
    zombie.routes.forEach(route => {

        let handler = (request, response) => {
            response.set(route.response.header)
                    .status(route.response.status)
                    .json(route.response.body);
        };

        switch (route.method) {
            case 'GET':
                app.get(route.path, handler);
                break;
            case 'POST':
                app.post(route.path, handler);
                break;
            case 'PUT':
                app.put(route.path, handler);
                break;
            case 'DELETE':
                app.delete(route.path, handler);
                break;
            case 'OPTIONS':
                app.options(route.path, handler);
                break;
        }
    });
    app.listen(zombie.port, console.log('Zombie ' + zombie.port + ' is walking'));
});