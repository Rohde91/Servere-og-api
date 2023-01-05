const express = require('express');
const bodyParser = require('body-parser');

// express app
const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static('public')); 
//app.use('/images', express.static('images'));

// listen for requests
app.listen(3000);

app.use(express.static('public'));

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.get('/',(req,res)=>{
   res.render('index');
});

app.get('/create',(req, res) => {
   res.render('create');
});


app.get('/dyn',(req, res) => {
   fetch('http://localhost:8000/blogs')
  .then(res => res.json())
  .then( data => res.render('dyn', { data })) //data er javascript (resultatet af blogs fra res)
	.catch(err => console.error('error:' + err));
 
});

app.get('/get',(req, res) => {
  res.render('get');
});

app.get('/del',(req, res) => {
  res.render('del');
});


app.get('/blogs',(req, res) => {
  const url='http://localhost:8000/blogs/';
  fetch(url)
  .then(res => res.json())
  .then(json => res.send(json))
	.catch(err => console.error('error:' + err));
});


app.post('/getBlog',(req, res) => {
  console.log(req.body);
  const nr= req.body.id;
  console.log(nr);
  fetch('http://localhost:8000/blogs/'+nr)
	.then(res => res.json())
	.then(json => res.send(json))
	.catch(err => console.error('error:' + err));
});


app.post('/createBlog',(req, res) => {
  console.log(req.body);
  const title=req.body.title;
  const body=req.body.body;
  const author=req.body.author;
  const blog = { title, body, author };
  fetch('http://localhost:8000/blogs/', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })
    .catch(()=>{
      console.log('Fejl');
    });
    
});


app.post('/slet',(req, res) => {
  console.log(req.body);
  const id=req.body.id;
 // const id=req.params.id;
  console.log(id);
  fetch('http://localhost:8000/blogs/'+id, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
    }).then(() => {
      console.log('blog slettet');
    })
    .catch(()=>{
      console.log('Fejl');
    });
   
});







