import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Delivery from './Delivery'
import CreateDelivery from './CreateDelivery'
import UpdateDelivery from './UpdateDelivery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Delivery/>} />
        <Route path="/create" element={<CreateDelivery/>} />
        <Route path="/update" element={<UpdateDelivery/>} /> 
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
