const express = require("express");
const users = require('./MOCK_DATA.json');
const app = express();
const PORT = 8000;
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
app.listen(PORT,() =>console.log(`Server Started at PORT:${PORT}`));
