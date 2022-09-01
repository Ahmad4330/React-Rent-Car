import { configureStore } from '@reduxjs/toolkit'
import DetailSlice from './DetailSlice'
import FormSlice from './FormSlice'

const Store = configureStore({
  reducer:({detail:DetailSlice.reducer, form: FormSlice.reducer})
})

export default Store