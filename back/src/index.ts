const socket = require('socket.io');
const Events = require('./eventTypes');
const fastify = require('fastify')({ logger: true });
const port: number = 3000;
