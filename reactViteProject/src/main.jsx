import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Good from './App.jsx'


const Test = (
  <a href="https://google.com" target='_blank'>google</a>

)

createRoot(document.getElementById('root')).render(

  Test
 
)
