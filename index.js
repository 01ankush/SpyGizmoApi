const express = require("express");
const users = require('./spy.json');
const productusers = require('./proa.json');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// app.use(express.json());

app.get('/api/products',(req,res)=>{
    return res.json(users);
})

app.get('/api/products/:id',(req,res)=>{
    const id = req.params.id;
    const user = productusers.find((user) => user.id === id);
    return res.json(user);
})



app.listen(PORT,() =>console.log(`Server Started at PORT:${PORT}`));
