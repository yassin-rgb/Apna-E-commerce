const User = require("../models/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Product = require("../models/productSchema")
const Order = require("../models/orderSchema")



//register for user
const register= async(req,res)=>{
    try{
        const{name,email,password}= req.body
        const newUser = await User.findOne({email})
        if (newUser) res.status(400).json({msg:"user exist, try to login"})
            else{
        const hashPW = await bcrypt.hash(password,10)
        const createUser= await User.create({name,email,password:hashPW})
        const token = jwt.sign({ id:createUser._id}, process.env.SECRET_KEY,{expiresIn:"7d"})
        res.status(201).json({msg:"user created", token:token, user:createUser})
    }
    }
    catch (error){
        res.status(500).json({msg:"somethin went wrong/register", error:error.message})
    }

}
//login for user 
const login = async(req,res)=>{
    try{
        const {email,password}= req.body
        const userExist= await User.findOne({email})
        if(!userExist) res.status(400).json({msg:"user does not exist,try to register"})
            else{
        const checkPW= await bcrypt.compare(password, userExist.password)
        if(!checkPW) res.status(404).json({msg:"password does not match please try again "})
            const token = jwt.sign({ id:userExist._id}, process.env.SECRET_KEY,{expiresIn:"7d"})
        res.status(201).json({msg:"login success", token:token, user:userExist})
        
            }
    }
    catch (error){
        res.status(500).json({msg:"something went wrong/login", error:error.message})
    }
}

//get user data
const getUserData = async(req,res)=>{
    try{

        const user = await User.findOne({_id:req.userId })
        if (!user) res.status(400).json({msg:"user does not exist,try to register"})
        res.status(200).json({msg:"user info success" , user:user})

    }
    catch (error){
        res.status(500).json({msg:"something went wrong/getuserdata", error:error.message})
    }
}


//get product
const getProduct = async(req,res)=>{
    try{
        const products = await Product.find()
        res.status(201).json({msg:"Get all Porducts succefully" , products:products})

    }
    catch (error){
        res.status(500).json({msg:"something went wrong/getProduct", error:error.message})
    }
}
//create order for user 

const createOrder = async(req,res)=>{
    try{
        
        const {userId,productList} = req.body
        const newOrder = await Order.create({products:productList,owner:userId})
        res.status(201).json({msg:"send orders" , newOrder})

    }
    catch (error){
        res.status(500).json({msg:"something went wrong/createOrder", error:error.message})
    }
}

//get User order



const getUserOrders = async(req,res)=>{
    try{
        
        const {userId} = req.query
        const userOrder = await Order.find({owner:userId})
        res.status(200).json({msg:"Get all orders", userOrder})

    }
    catch(error){
        res.status(500).json({msg:"something went wrong /getUserOrders", error:error.message})

    }
}



module.exports={register,login,getUserData,getProduct,createOrder,getUserOrders}