const router = require("express").Router()
const {register,login,getUserData,getProduct,createOrder,getUserOrders} = require("../controllers/userController")
const { authmiddleware } = require("../middleware/authMiddleware")



router.post("/register", register)
router.post("/login", login)
router.get("/getuserdata",authmiddleware, getUserData)
router.get("/getproducts", getProduct)
router.post("/createorder", authmiddleware,createOrder)
router.get("/getuserorders",authmiddleware, getUserOrders)



module.exports= router