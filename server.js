const http = require("http");
http.createServer((_,resp)=>{
    // resp.write("This is Pooja Shukla")
    resp.write("<h1>This is Pooja Shukla HII!</h1>");
    resp.end("Hello");
}).listen(4800);



const http1 = require("http");
http.createServer((_,resp)=>{
    resp.end("     bye");

}).listen(4801);