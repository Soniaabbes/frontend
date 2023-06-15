import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios"
import {  toast } from 'react-toastify';
const initialState = {
    
    userRDV: [],
  auth: false,
    loading: false,
    errors: []
};
export const registreRDV = createAsyncThunk("/appoinment/createAppoinment", async (data, {rejectWithValue}) => {
    try {
        const res = await axios.post("api/appoinment/createAppoinment", data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})
export const getEmailRDV = createAsyncThunk("/appoinment/emailAppoinment", async (data, {rejectWithValue}) => {
    try {
        const res = await axios.post("api/appoinment/getAppoinmentParEmail", data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})
//update valide en false
export const updateValideT = createAsyncThunk("/appoinment/valideT", async(id,data,{rejectWithValue}) => {
  
    try {
        const res = await axios.post(`api/appoinment/updateValide/${id}`, data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})
//update valide en true
export const updateValideF = createAsyncThunk("/appoinment/valideF", async(id,data,{rejectWithValue}) => {
  
    try {
        const res = await axios.post(`api/appoinment/updateValidetr/${id}`, data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors);

    }
})
// delete rdv
export const deleteRdv= createAsyncThunk("profile/deletetUser", async (id, {rejectWithValue}) => {
   
    

    try {
        const res = await axios.delete(`api/appoinment/deleteApponment/${id}`)
     
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})

// find appoinment for each email

export const rdvSlice = createSlice({
    name: 'RDV',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        // create Rdv
        .addCase(registreRDV.pending, (state, {payload}) => {
            state.loading = true
            state.auth=false
        

        }).addCase(registreRDV.fulfilled, (state, {payload}) => {
            state.userRDV = payload.Appoinments
           state.loading = false
           state.auth=true
           toast.success ('le RDV est crée avec succés')
        
         
        }).addCase(registreRDV.rejected, (state, {payload}) => {
         
         
            state.loading = false
            state.errors= payload
          
        })
        // get rdv selon email
        .addCase(getEmailRDV.pending, (state, {payload}) => {
            state.loading = true
            state.auth = false 
            
        }).addCase(getEmailRDV.fulfilled, (state, {payload}) => {
            state.userRDV = payload.appoinments
           state.loading = false
        
       
        }).addCase(getEmailRDV.rejected, (state, {payload}) => {
         
          state.auth= false
            state.loading = false
            state.errors= payload

    })
    //update valide en false
    .addCase(updateValideT.pending, (state, {payload}) => {
        state.loading = true
        state.auth = false 
        
    }).addCase(updateValideT.fulfilled, (state, {payload}) => {
        const id= payload
      state.auth= true
       state.loading = false
    
       if (id){state.userRDV= state.userRDV.map((Appoinments)=>Appoinments._id===id?payload:Appoinments)}
    }).addCase(updateValideT.rejected, (state, {payload}) => {
     
      state.auth= false
        state.loading = false
        state.errors= payload

})
// update valide en true
.addCase(updateValideF.pending, (state, {payload}) => {
    state.loading = true
    state.auth = false 
    
}).addCase(updateValideF.fulfilled, (state, {payload}) => {
    const id= payload
  state.auth= true
   state.loading = false

   if (id){state.userRDV= state.userRDV.map((Appoinments)=>Appoinments._id===id?payload:Appoinments)}
}).addCase(updateValideF.rejected, (state, {payload}) => {
 
  state.auth= false
    state.loading = false
    state.errors= payload

})
  // delete rdv
  .addCase(deleteRdv.pending, (state, {payload}) => {
    state.loading = true
   

}).addCase(deleteRdv.fulfilled, (state, {payload}) => {
const id= payload
   state.loading = false

   toast.success ('le profile est supprimé avec succés')
 if (id){state.userRDV= state.userRDV.filter((rdv)=>rdv._id===id)}
}).addCase(deleteRdv.rejected, (state, {payload}) => {
 
 
    state.loading = false
    state.errors= payload

})

    }
})

export default rdvSlice.reducer