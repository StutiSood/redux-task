import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

const RedLogin = createSlice({
    name: 'RedLogin',
    initialState,
    reducers: {
        showPage: (state, action) => {
            state.value = action
        },

        noShowPage: (state, action) => {
            state.value = false
        }
    }
})

export const {showPage, noShowPage} = RedLogin.actions
export default RedLogin.reducer