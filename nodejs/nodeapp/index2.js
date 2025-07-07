import http from 'http';
import { start } from 'repl';

http.createServer( (req, res) =>{
    res.end("Good morning, Chah pilo ji");
})
.listen(8080, () =>{
    console.log("Server is running on port 8080");
})