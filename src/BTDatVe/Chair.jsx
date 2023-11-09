import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { btMovieBookingActions } from '../Store/BTMovieBooking/slice'
import cn from 'classnames'

export const Chair = ({ghe}) => {
    const {chairsBooking, chairsBooked} = useSelector((state) => state.btMovieBooking)
    console.log(chairsBooking);
    const dispatch = useDispatch()

  return (
    <div className={cn( {
      "soHang": ghe.gia === 0,
        "chair": ghe.gia !== 0,
        "booking": chairsBooking.find((e) => e.soGhe === ghe.soGhe),
        "unavailableChair": chairsBooked.find((e) => e.soGhe === ghe.soGhe),
    })} onClick={() => {
        dispatch(btMovieBookingActions.setChairsBooking(ghe))
    }}>{ghe.soGhe}</div>
  )
}
