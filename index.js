
const express = require ('express');

const app = express();
const port = process.env.PORT || 3000;
const mainRoutes = require('./src/routes');


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static("public"));

app.use('/',mainRoutes);

app.listen(port, ()=>{
    console.log("server running");
})