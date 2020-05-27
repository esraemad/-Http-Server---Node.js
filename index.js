const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');
const db = fs.readFileSync("./db.json",'utf8') || '[]';
const DbTodos = JSON.parse(db);
const images = fs.readdirSync('./images/Nature');


const server = http.createServer((req, res) => {

  switch (req.url) {
  case '/':
{/* <img src="/myimg"></img> */}
    res.statusCode = 200;
    res.setHeader('content-type','text/html');
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
  
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/95504e437b.js"></script>
        <link rel="stylesheet" href="style.css">
        <title>Home Page</title>
      </head>
  
      <body>
        <header class="header">

          <div class="container headerContaier">
            <a href="/" class="logo"><i class="fa fa-list-alt fa-lg" aria-hidden="true"></i></a>
            <nav class="headerNav">
              <ul class="headerNav-list">
                <li class="headerNav-item">
                  <a href="/" class="headerLink headerLink--active">Home</a>
                </li>
                <li class="headerNav-item">
                  <a href="/nature" class="headerLink">Nature</a>
                </li>
                <li class="headerNav-item">
                  <a href="/quotes" class="headerLink">Quotes</a>
                </li>
              </ul>
            </nav>
          </div>

        </header>

        <section id="todos-section">
          <div class="container">
            <h1 class="title">TO DO LIST</h1>
            <table class="todos">
            <tr >
            <th>Title</th>
            <th>statue</th>
            </tr>
            ${DbTodos
              .map(
                (todo) =>
                          `                 
                          <tr>
                          <td>${todo.title}</td>
                          <td>${todo.statue}</td>
                          </tr>`

                 ).join('')}

            </table>
          </div>
        </section>
      </body>
    </html>
    `);
    
    break;

    case '/nature':
      {/* <img src="/myimg"></img> */}
          res.statusCode = 200;
          res.setHeader('content-type','text/html');
          res.end(`
          <!DOCTYPE html>
          <html lang="en">

          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://kit.fontawesome.com/95504e437b.js"></script>
            <link rel="stylesheet" href="style.css">
            <title>Natures</title>
          </head>

    <body>
      <header class="header">
        <div class="container headerContaier">
          <a href="/" class="logo"><i class="fa fa-list-alt fa-lg" aria-hidden="true"></i></a>
          <nav class="headerNav">
            <ul class="headerNav-list">
              <li class="headerNav-item">
                <a href="/" class="headerLink">Home</a>
              </li>
              <li class="headerNav-item">
                <a href="/nature" class="headerLink headerLink--active">Nature</a>
              </li>
              <li class="headerNav-item">
                <a href="/quotes" class="headerLink ">Quotes</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="nature-section">
        <div class="container nature__container">
      <div class="img-box">
      <h1>Nature</h1> 
       <img src="/imgnature1" class="image">
       <h1>Foresst</h1>
       <img src="/imgnature2" class="image">
       </div>
       
      </section>
    </body>
  </html>
            `);
            break;

            case '/quotes':
      {/* <img src="/myimg"></img> */}
          res.statusCode = 200;
          res.setHeader('content-type','text/html');
          res.end(`
          <!DOCTYPE html>
          <html lang="en">

          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://kit.fontawesome.com/95504e437b.js"></script>
            <link rel="stylesheet" href="style.css">
            <title>Quotes</title>
          </head>

    <body>
      <header class="header">
        <div class="container headerContaier">
          <a href="/" class="logo"><i class="fa fa-list-alt fa-lg" aria-hidden="true"></i></a>
          <nav class="headerNav">
            <ul class="headerNav-list">
              <li class="headerNav-item">
                <a href="/" class="headerLink">Home</a>
              </li>
              <li class="headerNav-item">
                <a href="/nature" class="headerLink">Nature</a>
              </li>
              <li class="headerNav-item">
                <a href="/quotes" class="headerLink headerLink--active">Quotes</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="nature-section">
        <div class="container nature__container">
      <div class="img-box">
      <h1>Linus</h1>
       <img src="/imgquote1" class="image">
       <h1>Think twice</h1> 
       <img src="/imgquote2" class="image">
       </div>
       
      </section>
    </body>
  </html>
            `);
            break;


    case '/style.css':
            res.setHeader('content-type','text/css');
            const style = fs.readFileSync("./style.css");
            res.end(style);
            break;

       case '/imgnature1':
        res.setHeader('content-type','image/jpg');
        const imgbufr1 = fs.readFileSync('./images/Nature/2-nature.jpg');
        res.end(imgbufr1);
        break;

      case '/imgnature2':
        res.setHeader('content-type','image/jpg');
        const imgbufr2 = fs.readFileSync('./images/Nature/foresttb-l.jpg');
        res.end(imgbufr2);
        break;
    
        case '/imgquote1':
          res.setHeader('content-type','image/jpg');
          const imgbufr3 = fs.readFileSync('./images/Quotes/Linus.jpg');
         res.end(imgbufr3);
          break;

          case '/imgquote2':
            res.setHeader('content-type','image/jpg');
            const imgbufr4 = fs.readFileSync('./images/Quotes/Think twice.jpg');
           res.end(imgbufr4);
            break;

            case '/favicon.ico':
              res.setHeader('Content-Type', 'image/jpg');
              const faviconbufr = fs.readFileSync('./images/icon.jpg');
              res.end(faviconbufr);
              break;

    default:
            res.statusCode = 404;
            res.end(`<!DOCTYPE html>
            <html lang="en">
            
            <head>
              <meta charset="utf-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1">
            
              <title>404 Not Found</title>
            
            
              <link href="https://fonts.googleapis.com/css?family=Montserrat:200,400,700" rel="stylesheet">
            
            
              <link rel="stylesheet" href="style.css">
            
            
            
            </head>
            
            <body>
            
              <div id="notfound">
                <div class="notfound">
                  <div class="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                  </div>
                  <a href="/">Go TO Homepage</a>
                </div>
              </div>
            
            
            </html>
            `);
  }


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// switch (req.url) {
//   case '/':

//     res.statusCode = 200;
//     res.setHeader('content-type','text/html');
//     res.end(`
//     <head>
//     <link rel="stylesheet" href="style.css">
//     </head>
//     <body>
//     '<h1>Hello World ESSO </h1>'
//     <img src="/myimg">
//      </body>
//     `);
//     break;

 

//     case '/profile':
//       res.statusCode = 200;
//       res.setHeader('content-type','application/json');
//       res.end(JSON.stringify({username:'mohammed'}));
//     break;
//     case '/style.css':
//       res.setHeader('content-type','text/css');
//       res.end(
//         `body{
//           background-color:red;
//         }`
      
//       );
//       break;

//       case '/myimg':
//         res.setHeader('content-type','image/jpg');
//         const imgbufr = fs.readFileSync('./pic.jpg');
//        res.end(imgbufr);
//         break;
      

//   default:
//     res.statusCode = 404;
//     res.end('NOT FOUND !!');
    
//     break;
// }