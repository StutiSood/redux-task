import { configureStore } from '@reduxjs/toolkit'
import RedLogin from '../Features/RedLogin'
import RedSignup from '../Features/RedSignup'

export const store = configureStore({
    reducer:{
        RedLogin,
        RedSignup
    }
})