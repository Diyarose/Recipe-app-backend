const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "rname":{type:String,required:true},
        "rid":{type:String,required:true},
        "rdesc":{type:String,required:true},
        "rimage":{type:String,required:true}
    }
)
let recipemodel=mongoose.model("recipes",schema);
module.exports={recipemodel}