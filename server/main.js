/**
 * Created by quinn on 9/29/13.
 */

var restify = require('restify');
var mongoose = require('mongoose');

var server = restify.createServer();

mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/test');

var Startup = mongoose.model('Startup', { time: Date });
Startup.find(function (err, startups) {
    if (err) console.log('err', err);

    console.log(startups);
});

var currentStartup = new Startup({ time: new Date() });
currentStartup.save(function (err) {
    console.log('Current Startup Time Saved');
});

server.get(/\/*/, restify.serveStatic({
    directory: './client',
    default: 'index.html'
}));



server.listen(process.env.PORT || 8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});