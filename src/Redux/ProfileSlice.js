import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {  toast } from 'react-toastify';
import axios from "axios"
const initialState = {
    
    userMed: [],
    
  auth: false,
    loading: false,
    errors: []
};
// get touts les médecins
export const getMedecin = createAsyncThunk("profile/alldoctors", async (data, {rejectWithValue}) => {
    try {
        const res = await axios.get("api/user/getusermedcin", data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})
// get tt les commerciales
export const getCommercial= createAsyncThunk("profile/allCommerciale", async (data, {rejectWithValue}) => {
    try {
        const res = await axios.get("api/user/getuserCommerciale", data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})
// get tout les patient:
export const getPatient = createAsyncThunk("profile/allpatient", async (data, {rejectWithValue}) => {
    try {
        const res = await axios.get("api/user/getuserPatient", data)
       
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})




//get all users
export const getAllUser= createAsyncThunk("profile/allUsers", async(data,{rejectWithValue})=>{
    const config={
        headers:{authorization:localStorage.getItem("token")}
      }
    try {
        const res = await axios.get('api/user/getAllUsers',data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})
// delete user 
export const deleteUser = createAsyncThunk("profile/deletetUser", async (id, {rejectWithValue}) => {
   
    

    try {
        const res = await axios.delete(`api/user/deleteUser/${id}`)
     
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})
// get one user
export const getOneUser = createAsyncThunk("profile/getOneUser", async (id ,{rejectWithValue}) => {

    
    

    try {
        const res = await axios.get(`api/user/userOne/${id}`)
     
        return res.data.oneUser
      
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        // get doctors
        .addCase(getMedecin.pending, (state, {payload}) => {
            state.loading = true
        

        }).addCase(getMedecin.fulfilled, (state, {payload}) => {
            state.userMed = payload.user
           state.loading = false
        
         
        }).addCase(getMedecin.rejected, (state, {payload}) => {
         
         
            state.loading = false
            state.errors= payload
          
        })
        // get tout les patients
        .addCase(getPatient .pending, (state, {payload}) => {
            state.loading = true
         

        }).addCase(getPatient .fulfilled, (state, {payload}) => {
            state.userMed = payload.user
           state.loading = false
        
        }).addCase(getPatient .rejected, (state, {payload}) => {
         
          
            state.loading = false
            state.errors= payload
          
        })
        // get tout les commerciales:
        .addCase(getCommercial.pending, (state, {payload}) => {
            state.loading = true
          
        }).addCase(getCommercial.fulfilled, (state, {payload}) => {
            state.userMed = payload.user
           state.loading = false
        
        }).addCase(getCommercial.rejected, (state, {payload}) => {
         
       
            state.loading = false
            state.errors= payload

    })

        // get all users
        .addCase(getAllUser.pending, (state, {payload}) => {
            state.loading = true
            
        }).addCase(getAllUser.fulfilled, (state, {payload}) => {
            state.userMed = payload.user
           state.loading = false
           localStorage.setItem("token", payload.token);
       
        }).addCase(getAllUser.rejected, (state, {payload}) => {
         
          
            state.loading = false
            state.errors= payload

    })

  







    // delete user
    .addCase(deleteUser.pending, (state, {payload}) => {
        state.loading = true
       

    }).addCase(deleteUser.fulfilled, (state, {payload}) => {
  const id= payload
       state.loading = false
 
       toast.success ('le profile est supprimé avec succés')
     if (id){state.userMed= state.userMed.filter((user)=>user._id===id)}
    }).addCase(deleteUser.rejected, (state, {payload}) => {
     
     
        state.loading = false
        state.errors= payload
    
})

// get one user

.addCase(getOneUser.pending, (state, {payload}) => {
    state.loading = true
    state.auth= false
}).addCase(getOneUser.fulfilled, (state, {payload}) => {
   
   state.loading = false
  state.auth= true
  state.userMed= payload
   toast.success(payload.msg)
   
}).addCase(getOneUser.rejected, (state, {payload}) => {
 
  
    state.loading = false
    state.auth = false
    state.errors= payload
  
})


    }
})



    export default profileSlice.reducer
    
