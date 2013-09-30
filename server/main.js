/**
 * Created by quinn on 9/29/13.
 */

var restify = require('restify');
var mongoose = require('mongoose');

var server = restify.createServer();

mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/test');

var collections = {};

var Startup = collections.startups = mongoose.model('Startup', { time: Date });

Startup.find(function (err, startups) {
    if (err) console.log('err', err);
});

var currentStartup = new Startup({ time: new Date() });
currentStartup.save(function (err) {
    console.log('Current Startup Time Saved');
});

server.get('/api/:version/:collection', function (request, response, next) {

    collections[request.params.collection].find(function (err, results) {

        var transResult = [];

        results.forEach(function (obj) {
            var transObj = {
                id: obj._id,
                time: obj.time
            };
            transResult.push(transObj);
        });

        response.send({
            startup: transResult
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