import { configureStore } from '@reduxjs/toolkit'


import authReducer from "./AuthSlice"
import profileReducer from "./ProfileSlice"
import rdvReducer from "./RdvSlice"


const store = configureStore({
    reducer:{
  auth: authReducer,
  profile:profileReducer,
  rdv:rdvReducer,

}
})

export default store