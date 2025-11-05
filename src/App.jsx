import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutDF from './layout/LayoutDF'
import './App.css'

// import delle pagine
import MoviePage from './pages/MoviePage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route element={<LayoutDF />}>
          <Route path='/movies' element={<HomePage />} />
            <Route path='/movies/:id' element={<MoviePage />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
