import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../redux/slices/userSlice"
import productSlice from "../redux/slices/productSlice"
import panierSlice from "../redux/slices/panierSlice"

export default configureStore({reducer:{user:userSlice, products:productSlice,panier:panierSlice}})