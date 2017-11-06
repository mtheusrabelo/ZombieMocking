const zombies = require('./zombies.json');
const express = require('express');
const morgan = require('morgan');

zombies.forEach(zombie => {
    const app = express();
    app.use(morgan('tiny'));
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