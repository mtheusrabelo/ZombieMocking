const zombies = require('./zombies.json');
const express = require('express');

zombies.forEach(zombie => {
    const app = express();
    zombie.routes.forEach(route => {
        const handler = (request, response) => {
            response.set(route.response.header)
                    .status(route.response.status)
                    .json(route.response.body);
        };

        const method = route.method.toLowerCase();
        app[method](route.path, handler);
    });
    app.listen(zombie.port, console.log('Zombie ' + zombie.port + ' is walking'));
});