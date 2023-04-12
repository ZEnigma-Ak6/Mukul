import express from "express";
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json())
app.use(express.static("../public"))


app.get('/',(req,res)=>{
    res.send("this is the default age")
})

app.post('/age', (req,res)=>{
    const {year, month, day} = req.body;

    console.log(year, month, day);
    res.status(200).json({Age: "20"});

})


app.listen(3300, () => {
    console.log("Server started at port 3300");
})