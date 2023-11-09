import React from 'react'
import data from './data.json'
import { ChairList } from './ChairList'
import { Result } from './Result'

export const BTMovieBooking = () => {
  console.log(data);
  return (
    <div className='container mt-3'>
      <h1 className='text-center'>Đặt vé xem phim</h1>
      <div className="row">
        <div className="col-8">
          <div className='p-3 text-white text-center bg-dark fw-bold'>SCREEN</div>
          <ChairList data={data}/>
        </div>
        <div className="col-4">
          <Result/>
        </div>
      </div>
    </div>
  )
}
