import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { btMovieBookingActions } from "../Store/BTMovieBooking/slice";

export const Result = () => {
  const {number, chairsBooking} = useSelector((state) => state.btMovieBooking)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Kết quả đặt vé</h2>
      <div>
        <div className="d-flex gap-3 mt-3">
          <div className="unavailableChair">X</div>
          <p>Ghế đã đặt</p>
        </div>
        <div className="d-flex gap-3 mt-3">
          <div className="chosenChair"></div>
          <p>Ghế đang đặt</p>
        </div>
        <div className="d-flex gap-3 mt-3">
          <div className="chair"></div>
          <p>Ghế chưa đặt</p>
        </div>
      </div>
      <table className="table">
        <thead>
            <tr className="fw-bold">
                <td>Số ghế</td>
                <td>Giá</td>
                <td>Hủy</td>
            </tr>
        </thead>
        <tbody>
          {
            chairsBooking.map((ghe) => {
              return <tr key={ghe.soGhe}>
                <td>{ghe.soGhe}</td>
                <td>{ghe.gia}</td>
                <td className="text-danger"><p className="cancelButton" onClick={() => {
                  dispatch(btMovieBookingActions.deleteChairsBooking(ghe));
                }}>X</p></td>
              </tr>
            })
          }

          <tr>
            <td className="fw-bold">Total</td>
            <td>{
              chairsBooking.reduce((total, value) => {
                return (total += value.gia)
              }, 0)
              }</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-success mt-3" onClick={() => {
        dispatch(btMovieBookingActions.setChairsBooked())
      }}>Payment</button>

    </div>
  );
};
