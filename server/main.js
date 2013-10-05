/* globals require, process */

/**
 * Created by quinn on 9/29/13.
 */

var restify = require('restify');
var mongoose = require('mongoose');

var server = restify.createServer();

mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/test');

var collections = {};

var Startup = collections.startups = mongoose.model('Startup', { time: Date });
var Hipsters = collections.hipsters = mongoose.model('Hipsters', {
    firstName: String,
    lastName: String
});

var currentStartup = new Startup({ time: new Date() });
currentStartup.save(function (err) {
    console.log('Current Startup Time Saved');
});

server.use(restify.bodyParser());
server.use(restify.queryParser());

server.get('/api/:version/:collection', function (request, response, next) {
    "use strict";

    collections[request.params.collection].find(request.query, function (err, results) {
        console.log('query', request.query, results);

        var restResponse = {};
        restResponse[request.params.collection] = results;

        response.send(restResponse);
    });

    return next();
});

server.post('/api/:version/:collection', function (request, response, next) {
    var newHipster = new Hipsters({
        firstName: request.context.hipster.firstName,
        lastName: request.context.hipster.lastName
    });

    newHipster.save(function (err, savedObj) {
        response.send({
            hipster: savedObj
        });
    });

    return next();
});

server.get(/\/?.*/, restify.serveStatic({
    directory: './client',
    default: 'index.html'
}));


server.listen(process.env.PORT || 8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});