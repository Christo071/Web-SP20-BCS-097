const express=require('express');
const cors=require('cors');
const app=express();

app.use(express.json());
app.use(cors());

const products=[{title:"Cheese",price:50},{title:"Butter",price:150},{title:"Magnum",price:450}];

app.get('/api/products',(req,res)=>{
    res.send(products);
});

app.get('/api/products/:index',(req,res)=>{
    if(!products[req.params.index]) 
    return res.status(400).send("Product not found");

    res.send(products[req.params.index]);
});

app.put('/api/products/:index',(req,res)=>{
    products[req.params.index]=req.body;
   res.send("Updated\n "+products);
});

app.delete('/api/products/:index',(req,res)=>{
   products.splice(req.params.index,1);
    res.send(products);
});

app.post('/api/products',(req,res)=>{
    products.push(req.body);
     res.send(products);
 });

app.listen(4000);