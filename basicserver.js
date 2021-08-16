const http=require('http')
const fs=require('fs')

const server=http.createServer(function(req,res){
    console.log('Server Starting!!!......');
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('index.html',function(error,data){
    if(error){
        res.writeHead(404)
        res.write('Error : File not Found')

    }else{
        //res.write('Server Started\n');
        res.write(data)
    }
res.end()
})
}).listen(8080)  
console.log('Server Running !!!!!!...');