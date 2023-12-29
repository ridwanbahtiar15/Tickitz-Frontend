import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scheduleInfo: 0,
    orderInfo: {
        schedules: "",
        seats: "",
        total_ticket: 0,
        total_purchase: 0,
        payment: "",
        paid: false
    },
    chooseSeat: []
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder(state, {payload}) {
            return {
                ...state,
                scheduleInfo: payload,
            };
        },
        cleanOrder(state) {
            return {
                scheduleInfo: 0,
                orderInfo: {
                    schedules: "",
                    seats: "",
                    total_ticket: 0,
                    total_purchase: 0,
                    payment: ""
                },
                chooseSeat: []
            }
        },
        addOrderTransaction(state, {payload}) {
            return {
                ...state,
                orderInfo: {
                    schedules: payload.schedules,
                    seats: payload.seats,
                    total_ticket: payload.total_ticket,
                    total_purchase: payload.total_purchase,
                    payment: payload.payment,
                    paid: false
                }
            };
        },
        addSeat(state, {payload}) {
            return {
                ...state,
                chooseSeat: [...state.chooseSeat, payload],
            };
        },
        delSeat(state, {payload}) {
            const orderSeatInfo = state.chooseSeat.filter(
                (seat, index) => seat !== payload
            );
            return {
                ...state,
                chooseSeat: orderSeatInfo
            }
        }
    },
});

export const { addOrder, cleanOrder, addOrderTransaction, addSeat, delSeat } = orderSlice.actions;
export default orderSlice.reducer;