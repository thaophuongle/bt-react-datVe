import React from 'react'
import { Chair } from './Chair'
import classname from 'classnames'

export const ChairList = ({data}) => {
  return (
    <div>
        {
            data.map((hangGhe, index) => {
                return <div key={hangGhe.hang} className='d-flex gap-3'>
                        <div style={{
                            width: 40,
                            height: 40,
                            display: "flex",
                            alignItems: "center",
                        }}>{hangGhe.hang}</div>
                        <div className='d-flex gap-3 mt-3'>
                            {
                                hangGhe.danhSachGhe.map((ghe, index) => {
                                    return <Chair ghe={ghe} key={ghe.soGhe}/>
                                })
                            }
                        </div>
                    </div>
            })
        }
    </div>
  )
}
