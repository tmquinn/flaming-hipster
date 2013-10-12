/* globals require, process, console */

/**
 * Created by quinn on 9/29/13.
 */

var restify = require('restify');
var mongoose = require('mongoose');

var server = restify.createServer();

mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/flaming_hipster');

var collections = {};

/* Models */
var Startup = mongoose.model('Startups', { time: Date });

var Hipster =  mongoose.model('Hipsters', {
    firstName: String,
    lastName: String
});

var currentStartup = new Startup({ time: new Date() });
currentStartup.save(function (err) {
    "use strict";
    console.log('Current Startup Time Saved');
});

server.use(restify.bodyParser());
server.use(restify.queryParser());

server.get('/api/:version/:collection', function (request, response, next) {
    "use strict";

    //TODO: This should be procedural, not a switch statement?
    var db, modelName;
    switch (request.params.collection) {
        case "hipsters":
            db = Hipster;
            modelName = 'hipster';
            break;

        default:
            response.send({ error: 'No such collect: ' + request.params.collection});
    }

    db.find(request.query, function (err, results) {
        var body = {};
        body[modelName] = results;
        response.send(body);
    });

    return next();
});

server.get('/api/:version/:collection/:id', function (request, response, next) {
    "use strict";

    collections[request.params.collection].find(request.params.id,
        function (err, results) {
            var restResponse = {};
            restResponse[request.params.collection] = results;

            response.send(restResponse);
        });

    return next();
});

server.put('/api/:version/:collection/:id', function (request, response, next) {
    "use strict";

    var db,
        body = request.body;
    switch (request.params.collection) {
        case "hipsters":
            db = Hipster;
            body.hipster._id = request.params.id;
            break;

        default:
            return false;
    }

    db.update(body);

    response.send(body);

    return next();
});

server.post('/api/:version/:collection', function (request, response, next) {
    "use strict";
    var newHipster = new Hipster({
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
    "use strict";
    console.log('%s listening at %s', server.name, server.url);
});