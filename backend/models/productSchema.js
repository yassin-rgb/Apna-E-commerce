const mongoose= require("mongoose")


const productSchema = mongoose.Schema({
    title:{ type:String, required:true},
    description:{type:String,required:true},
    price:{type:String,required:true},
    poster:{type:String,required:true}
})

const Product= mongoose.model("product",productSchema)

module.exports= Product