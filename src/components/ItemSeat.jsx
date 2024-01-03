import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addSeat, delSeat } from "../redux/slices/order";

function ItemSeat(props) {
  const dispatch = useDispatch();
  const scheduleId = useSelector(state => state.order.scheduleInfo)
  const selectedSeat = useSelector(state => state.order.chooseSeat)
  const checkSeat = (seat) => {
    if (props.seat !== "No data") {
      return props.seats.includes(seat)
    }
    return false
  }

  const seatHandler = (e, seat) => {
      if (!checkSeat(seat)) {
        const target = e.target;
        target.classList.toggle("bg-primary");
        const isSeatSelected = selectedSeat.includes(seat);
  
        if (isSeatSelected) {
          dispatch(delSeat(seat));
        } else {
          dispatch(addSeat(seat));
        }
      }
  };
  return (
    <table className="text-sm font-semibold">
      <tr className="flex items-center py-1">
        <td className="px-2 w-8">A</td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A1") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A1")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A2") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A2")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A3") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A3")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A4") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A4")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A5") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A5")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A6") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A6")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A7") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A7")}}></div>
        </td>
        <td className="px-1 w-32 flex justify-center relative -top-14">
          Screen
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A8") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A8")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A9") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A9")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A10") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A10")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A11") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A11")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A12") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A12")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A13") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A13")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("A14") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "A14")}}></div>
        </td>
      </tr>
      <tr className="flex items-center py-1">
        <td className="px-2 w-8">B</td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B1") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B1")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B2") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B2")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B3") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B3")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B4") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B4")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B5") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B5")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B6") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B6")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B7") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B7")}}></div>
        </td>
        <td className="px-1 w-32"></td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B8") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B8")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B9") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B9")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B10") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B10")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B11") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B11")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B12") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B12")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B13") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B13")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("B14") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "B14")}}></div>
        </td>
      </tr>
      <tr className="flex items-center py-1">
        <td className="px-2 w-8">C</td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C1") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C1")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C2") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C2")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C3") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C3")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C4") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C4")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C5") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C5")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C6") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C6")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C7") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C7")}}></div>
        </td>
        <td className="px-1 w-32"></td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C8") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C8")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C9") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C9")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C10") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C10")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C11") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C11")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C12") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C12")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C13") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C13")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("C14") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "C14")}}></div>
        </td>
      </tr>
      <tr className="flex items-center py-1">
        <td className="px-2 w-8">D</td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D1") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D1")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D2") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D2")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D3") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D3")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D4") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D4")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D5") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D5")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D6") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D6")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D7") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D7")}}></div>
        </td>
        <td className="px-1 w-32"></td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D8") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D8")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D9") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D9")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D10") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D10")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D11") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D11")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D12") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D12")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D13") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D13")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("D14") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "D14")}}></div>
        </td>
      </tr>
      <tr className="flex items-center py-1">
        <td className="px-2 w-8">E</td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E1") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E1")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E2") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E2")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E3") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E3")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E4") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E4")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E5") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E5")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E6") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E6")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E7") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E7")}}></div>
        </td>
        <td className="px-1 w-32"></td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E8") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E8")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E9") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E9")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E10") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E10")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E11") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E11")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E12") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E12")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E13") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E13")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("E14") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "E14")}}></div>
        </td>
      </tr>
      <tr className="flex items-center py-1">
        <td className="px-2 w-8">F</td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F1") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F1")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F2") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F2")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F3") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F3")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F4") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F4")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F5") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F5")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F6") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F6")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F7") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F7")}}></div>
        </td>
        <td className="px-1 w-32"></td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F8") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F8")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F9") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F9")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F10") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F10")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F11") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F11")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F12") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F12")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F13") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F13")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("F14") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "F14")}}></div>
        </td>
      </tr>
      <tr className="flex items-center py-1">
        <td className="px-2 w-8">G</td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G1") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G1")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G2") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G2")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G3") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G3")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G4") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G4")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G5") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G5")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G6") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G6")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G7") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G7")}}></div>
        </td>
        <td className="px-1 w-32"></td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G8") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G8")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"
        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G9") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G9")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G10") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G10")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G11") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G11")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G12") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G12")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G13") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G13")}}></div>
        </td>
        <td
          className="px-1 cursor-pointer"

        >
          <div className={`w-[26px] h-[26px] ${checkSeat("G14") ? "bg-[#6E7191]" : "bg-[#D6D8E7]" } rounded`} onClick={(e) => {seatHandler(e, "G14")}}></div>
        </td>
      </tr>
      <tr className="flex items-center py-1">
        <td className="px-2 w-8"></td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">1</div>
        </td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">2</div>
        </td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">3</div>
        </td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">4</div>
        </td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">5</div>
        </td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">6</div>
        </td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">7</div>
        </td>
        <td className="px-1 w-32"></td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">8</div>
        </td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">9</div>
        </td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">10</div>
        </td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">11</div>
        </td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">12</div>
        </td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">13</div>
        </td>
        <td className="px-1">
          <div className="w-[26px] h-[26px] text-center">14</div>
        </td>
      </tr>
    </table>
  );
}

export default ItemSeat;
