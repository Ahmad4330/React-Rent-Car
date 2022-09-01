import { createSlice } from "@reduxjs/toolkit";

const DetailSlice = createSlice({
  name: 'detail',
  initialState:{items:[]},
  reducers:({
    ShowDetail(state,action){
      const newItem = action.payload
      const exsistingItem = state.items.find(item => item.id === newItem.id)
      if(!exsistingItem){
        state.items.push({
          id : newItem.id,
          heading1 : newItem.heading1,
          price : newItem.price,
        })
      }
    }
  })
})

export const DetailAction = DetailSlice.actions
export default DetailSlice