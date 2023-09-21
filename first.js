const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>  
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Lucky Fitness</title>
  
  </head>
  <link rel="stylesheet" href="css/style.css">
  <style>
      body {
          margin: 0px;
          padding: 0px;
          background: url('img/yoga.jpg');
          color: white;
          background-size: cover;
      }
      
      .left {
          position: absolute;
          left: 34px;
          top: 10px;
          display: inline-block;
          border: 2px ;
      }
      .left img{
          width: 143px;
  
      }
      .left div{
          text-align: center;
      }
  
      .mid {
          display: block;
          width: 33%;
          top: 10px;
          margin: 12px auto ;
  }
  
      .right {
          position: absolute;
          right: 34px;
          top: 10px;
          display: inline-block;
          border: 2px ;
          }
          
          .navbar li 
          {
             display: inline-block; 
             font-size: 20px;
  
          }
          .navbar li a:hover, .navbar li a.active{
              text-decoration: underline;
              color:aqua;
          }
          .navbar li a{
              color: rgb(99, 23, 2);
              text-decoration: none;
              padding: 20px 10px;
          }
          .btn{
              margin: 0px 9px;
              background-color: whitesmoke;
              color: coral;
              padding: 4px 14px;
              border: 2px solid grey;
              border-radius: 10px;
              font-size: 20px;
              cursor: pointer;
          }
          .btn:hover
          {
            background-color: antiquewhite;
          }
          .container
          {
              /* border: 1px solid green; */
              align-items: center;
              margin: 92px 164px;
              width: 33%;
              border-radius: 5px;
          }
          .container h1
          {
              color: black;
          }
          .form-group input{
              display: block;
              text-align: center;
              width: 302px;
              padding: 8px;
              border: 2px solid black;
              margin: 34px auto;
              font-weight: 25px;
              border-radius: 26px;
      
          }
          #btn{
              text-align: center;
              /* align-items: center; */
              margin-left: 204px;
              background-color: whitesmoke;
              color: coral;
              padding: 4px 14px;
              border: 2px solid grey;
              border-radius: 10px;
              font-size: 20px;
              cursor: pointer;
              
          }
  </style>
  
  <body>
      
      <header class="header">
          <div class="left">
          <img src="img/Black & White Minimalist Business Logo copy.png" alt="logo">
          
          </div>
          <div class="mid">
          <ul class="navbar">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Fitness Calculator</a></li>
              <li><a href="#">Contact Us </a></li>
          </ul>
          </div>
          <div class="right">
          <button class="btn">Call Us Now </button>
          <button class="btn">Email Us</button>
          </div>
      </header>
      <div class="container">
          <h1>Join the best gym of delhi now</h1>
          <form action="noaction.php">
            <div class="form-group">
              <input type="text" name="" placeholder="Enter your name"></div>
            <div class="form-group">
              <input type="text" name="" placeholder="Enter your age"></div>
            <div class="form-group">
              <input type="text" name="" placeholder="Enter your number"></div>
            <div class="form-group">
              <input type="text" name="" placeholder="Enter your address"></div>
             <button id="btn">Submit</button>
  
  
          </form>
      </div>
  </body>
  
  </html> 
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});