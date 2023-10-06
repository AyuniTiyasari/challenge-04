import React from 'react'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import { Detail } from './pages/Detail'

const App = () => {
  return (
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/detailMovie/:id' element={<Detail />} />
    </Routes>
  )
}

export default App