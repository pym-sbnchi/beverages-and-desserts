import { createSlice } from "@reduxjs/toolkit";
const initialState={
    token:null
}
const authSlice=createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        logout:(state)=>{
            state.token=null
        },
        login:(state,action)=>{
            state.token=action.payload.token
        }
    }
})
export const {login,logout}=authSlice.actions
export default authSlice.reducer