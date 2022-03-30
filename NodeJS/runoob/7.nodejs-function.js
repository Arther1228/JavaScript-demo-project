
/**一个函数可以作为另一个函数的参数 */
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");



/**匿名函数 */
function execute(someFunction, value) {
    someFunction(value);
}

execute(function (word) { console.log(word) }, "Hello");

/**
 *  现在它看上去应该清晰了很多：我们向 createServer 函数传递了一个匿名函数。
 *  var http = require("http");
      http.createServer(function(request, response) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Hello World");
      response.end();
    }).listen(8888);

    VS

    var http = require("http");
    function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
    }
    http.createServer(onRequest).listen(8888);
 */