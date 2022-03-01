const express = require('express');
const disapp = express();
const app = express();

disapp.disable("x-powered-by")
app.use(express.static('public'))

app.listen(8081);

app.get("/",(request,response)=>{

response.sendFile(__dirname+'/index.html');
})
