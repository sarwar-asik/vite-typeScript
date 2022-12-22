import { useState } from 'react'
import reactLogo from './assets/react.svg'
import router from './routes/Routes'
import './App.css'
import {RouterProvider} from 'react-router-dom'

import Main from './layout/Main'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="">
  <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
