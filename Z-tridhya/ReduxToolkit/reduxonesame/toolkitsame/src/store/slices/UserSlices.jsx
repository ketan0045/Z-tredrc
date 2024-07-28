import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            // state.pop(action.payload);
            // let userIndexNum = state.indexOf(action.payload)
            // state.splice(userIndexNum, 1);

            // user name to delete
            // let deleteData = state.filter((item) =>item !== action.payload);
            // return deleteData

            state.splice(action.payload, 1);
        },
        // clearAllUsers(state, action) {
        //     return []
        // },
    },
    extraReducers(builder) {
        builder.addCase(clearAllUsers, () => {
            return []
        })
    }
})

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions
















