import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode className="container">
    <Navbar />
    <Main />
  </React.StrictMode>,
)
