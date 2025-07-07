import express from 'express';
const app = express();

app.use('/images',express.static("images"));
app.use(express.static("public"));

app.get('/products',(req,res)=>{
    res.send("Product List");

})


app.listen(8080,()=>{
    console.log("server started on port 8080");
})