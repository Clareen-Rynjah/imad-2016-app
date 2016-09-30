var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ArticleOne = {
    title: 'Article One | Clareen Rynjah',
    heading: 'Article One',
    date:'Sep 30, 2016'
    content:  `
     <p>This is the content of the first articl.e.This is the content of the first articleThis is the content of the first article
     </p>
     <p>
                  This is another content of the first article. This is another content of the first article. This is another content of the first article.
     </p>
          `
};
function createTemplate(data){
 var title = data.title;
var date = data.date;
var heading = data.heading;
var content= data.content;

var htmlTemplate = `<html>
  <head>
      <title>
          ${title}
      </title>
      <meta name="viewport" content="width+device-width, initial-scale=1" />
      <link href="/ui/style.css" rel="stylesheet" />
  </head>
  <body>
      <div class="container">
          <div>
              <a href="/">Home</a>
          </div>
          <br/>
          <h3> 
               ${heading}
          </h3>
          <div> 
              ${date}
          </div>
          <div>
              ${content}
              <p>
                  This is another content of the first article.
              </p>
          </div>
      </div>
</html>`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
    
app.get('/Article-one',function(req,res)
    {
        res.send(createTemplate(Article-one));
    });
app.get('/Article-two',function(req,res)
   {
       res.send(createTemplate(Article-two));
   }
);

app.get('/Article-three',function(req,res)
    {
       res.sendFile(path.join(__dirname,'ui','Article-three.html'));
    });
    
app.get('/ui/style.css', function (req, res)
{
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
