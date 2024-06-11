const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {recipemodel}=require("./models/recipe")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://dhiya04:dhiyafisat@cluster0.wspdqan.mongodb.net/recipeapp?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let recipe=new recipemodel(input)
    recipe.save()
    console.log(recipe)
    res.json({status:"success"})
})

app.post("/search",(req,res)=>{
    res.send("Search")
})

app.post("/delete",(req,res)=>{
    res.send("Delete")
})

app.get("/view",(req,res)=>{
   recipemodel.find().then(
    (data)=>{
        res.json(data)
    }
   ).catch()
})

app.listen(8080,()=>{
    console.log("server Started")
})