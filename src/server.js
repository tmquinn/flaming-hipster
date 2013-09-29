/**
 * Created by quinn on 9/29/13.
 */

var restify = require('restify');

var server = restify.createServer();

server.get('/', restify.serveStatic({
    directory: './static/html',
    default: 'index.html'
}));

server.listen(process.env.PORT || 8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});