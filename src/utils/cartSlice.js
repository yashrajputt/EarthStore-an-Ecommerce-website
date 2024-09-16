import { createSlice } from "@reduxjs/toolkit";

const cartslice= createSlice({
    name: 'cart',
    initialState:{
        items:["banana","burger"]
    },
    reducers:{
        addItems:(state,action)=>{
             state.items.push(action.payload)
        },
        removeItems:(state)=>{
            state.items.pop()
        },
        clearItems:(state)=>{
            state.items.length()=0;
        }
    }
})

export const {addItems,removeItems,clearItems}=cartslice.actions;
export default cartslice.reducer;