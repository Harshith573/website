const { error } = require('console');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product-models')

app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});
app.get('/blog', (req, res) => {
  res.send('hello blog');
});
app.get('/products', async(req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
app.get('/products/:id',async(req, res)=>{
    try {
        const { id } = req.params;  
        const product = await Product.findById(id );
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.post('/products', async(req, res) => {
  try{
    const product = await Product.create(req.body)
    res.status(200).json(product);
  }catch(err){
    console.log(err.message);
    res.status(500).json({message : error.message})
  }
});
app.put('/products/:id',async(req,res)=>{
    try {
        const { id } = req.params; 
        const product = await Product.findByIdAndUpdate(id, req.body ); 
        if(!product){
            return res.status(404).json({message:`cannot find any product with ID${id}`})
        }
        const uptatedProduct = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://admin:HARSHITH123@cluster0.qx2tg3u.mongodb.net/Node-API')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
