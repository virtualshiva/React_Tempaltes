import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import First from './First'
import Home from './pages/Home'
import Second from './Second'
import Increment from './hooks/Increment'
import Test from './hooks/Test'
import DataFetch from './hooks/DataFetch'
import Main from './hooks/Main'
import Show from './context/Show'
const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/second' element={<Second />} />
        <Route path='/increment' element={<Increment />} />
        <Route path='/test' element={<Test />} />
        <Route path='/api_data' element={<DataFetch />} />
        <Route path='/prop' element={<Main />} />
        <Route path='/globalcontext' element = {<Show/>} />
      </Routes>
    </Router>
  )
}

export default MyRoutes
