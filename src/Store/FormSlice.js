import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
  name: 'forms',
  initialState: {forms: [],
  reducers:({
    FormData(state, action){
      const newData = action.payload
      state.forms.push({
        name : newData.name,
        phoneNumber : newData.phone,
        adress : newData.adress,
        city : newData.city
      })
    }
  })
  }
})

export const FormAction = FormSlice.actions
export default FormSlice