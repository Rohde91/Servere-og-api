const express = require('express');
const bodyParser = require('body-parser');

// express app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static('public')); 
//app.use('/images', express.static('images'));

// listen for requests
app.listen(3000);

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



app.get('/blogs/:id',(req, res) => {
  //console.log(req);
  //console.log(req.body);
  //const nr=req.query.id;
  const nr= req.params.id;
  console.log(nr);
  fetch('http://localhost:8000/blogs/'+nr)
	.then(res => res.json())
	.then(json => res.send(json))
	.catch(err => console.error('error:' + err));
});


app.get('/blogs',(req, res) => {
  const url='http://localhost:8000/blogs/';
  fetch(url)
  .then(res => res.json())
  .then(json => res.send(json))
	.catch(err => console.error('error:' + err));
});

app.post('/blogs',(req, res) => {
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


app.get('/slet/:id',(req, res) => {
  console.log(req.body);
  const id=req.params.id;
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





