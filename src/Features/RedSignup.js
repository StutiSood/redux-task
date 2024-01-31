import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false
}

const RedSignup = createSlice({
    name: 'RedSignup',
    initialState,
    reducers: {
        showPage1: (state, action) => {
            state.value = action
        },

        noShowPage1: (state, action) => {
            state.value = false
        }
    }
})

export const {showPage1, noShowPage1} = RedSignup.actions
export default RedSignup.reducer