import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

var date = new Date();
var year = date.getFullYear();

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        presentyear : year,
    })
})

app.listen(port,()=>{
    console.log("Server has started");
});