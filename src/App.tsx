import { useState } from 'react'
import QRComponent from './components/qrComponent/QRComponent'
import './App.css'

function App() {

  return (
    <div className="App">
      <QRComponent/>
      <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="https://github.com/ashishkumarmohan">Ashish Kumar Mohan</a>.
  </div>
    </div>
  )
}

export default App
