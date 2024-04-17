import {createSlice} from "@reduxjs/toolkit";

const burgerSlice = createSlice({
    name: 'state',
    initialState: {
        burgerStatus: false
    },
    reducers: {
        changeBurgerActiveStatus(state, action) {
            console.log(action.payload)
            state.burgerStatus = !action.payload
        }
    }
})

export const {changeBurgerActiveStatus} = burgerSlice.actions

export default burgerSlice.reducer