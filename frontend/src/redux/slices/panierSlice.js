import { createSlice } from "@reduxjs/toolkit"


    const panierSlice = createSlice({
        name:"panier",
        initialState:{
            isLoading: false,
            error: false,
            products:[]
        },
        reducers:{
            addProducPanier:(state,action)=>{
                state.products=[...state.products,action.payload]
            }
        },
        

    })

    export default panierSlice.reducer
    export const {addProducPanier} = panierSlice.actions
   
    