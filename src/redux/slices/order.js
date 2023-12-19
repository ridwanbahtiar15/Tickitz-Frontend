import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scheduleInfo: 0,
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder(state, {payload}) {
            return {
                scheduleInfo: payload,
            };
        },
        cleanOrder(state) {
            return {
                scheduleInfo
            }
        }
    },
});

export const { addOrder, cleanOrder } = orderSlice.actions;
export default orderSlice.reducer;