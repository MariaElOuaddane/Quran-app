import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes, Route, Link} from 'react-router-dom'
import QuranSurat from './QuranSurat'
import Surat from './Surat'
import QuranMain from './QuranMain'

function App() {

  return(
    <><BrowserRouter>
    <header>
      <section><h2>Quran App</h2></section>
      <Link to={'/Quran'}>Quran</Link>
      <Link to={'/'}>Home</Link>
    </header>
    
      <Routes>
        <Route path='/' element={<QuranMain/>}></Route>
        <Route path='/Quran' element={<QuranSurat/>}></Route>
        <Route path='/Quran/:id' element={<Surat/>}></Route>
      </Routes>
    
    
    <footer>
        2025
    </footer>
    </BrowserRouter></>
  )
}

export default App
