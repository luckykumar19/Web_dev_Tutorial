const express = require("express");
const path = require("path");
const app = express();
const port = 80;
//Express specific stuff
app.use('/static', express.static('static'))
 //pub specific stuff
 app.set('view engine','pug')
 app.set('views',path.join(__dirname, 'views'))

//Endpoints
app.get('/',(req, res)=>{
    res.status(200).render('')
})

//Start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
