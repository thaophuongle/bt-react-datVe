import { useState } from 'react'
import { BTMovieBooking } from './BTDatVe/BTMovieBooking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BTMovieBooking/>
    </div>
  )
}

export default App
