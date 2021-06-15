const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 5500;


const server = http.createServer((request,response)=>{

    //console.log(request.url);
    
    switch (request.url){
        case '/':
            response.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
            fs.readFile(path.join(__dirname, "index.html"), (err, page)=>{
                if(err){
                    response.end("Nie znaleziono pliku");
                }else{
                    response.end(page);
                }
            })
            break;
        case '/api/samoloty':
            response.writeHead(200,{'Content-Type': 'application/json; charset=utf-8'});
            const dane = JSON.stringify()
            response.end(dane);
            break;
        default:
            response.end("Brak strony");
    }
    
}).listen(port,'127.0.0.1', ()=> { 
    console.log("server jest i nazłuchuje żądania")
})