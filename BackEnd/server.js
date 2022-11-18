const express = require('express')
const app = express()
const port = 4000 //change port - seperate app - both cant run on 3000 
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));
//connect to mongo database
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.prho57d.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled

//mongodb+srv://shaunamartyn1:<password>@cluster0.prho57d.mongodb.net/?retryWrites=true&w=majority
}//
const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String

});
//"Books" name of folder its being written to 
const bookModel = mongoose.model('Books', bookSchema);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/books', (req,res)=>{
    console.log(req.body);//logs books to console
    //create a record for title, cover, author 
    bookModel.create({
      title:req.body.title, 
      cover:req.body.cover,
      author:req.body.author
    })
    res.send('Data Recieved');
})

//takes in json data - instead of hardcoded books array 
app.get('/api/books', (req, res)=>{
  bookModel.find((error, data) => {
    res.json(data);
  })
})
        
   /* //show books array and message from server
    res.json({
        myBooks: books,
        message:'Hello from the server'
    })
})*/

//id is a parameter
app.get('/api/book:id', (req, res)=>{
  console.log(req.params.id);
  bookModel.findById(req.params.id, (error, data)=>{
    res.json(data);
  });//callback function
  res.send('data');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})