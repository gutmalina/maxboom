import React from 'react'

import { RouterProvider, HashRouter } from 'react-router-dom'
import { router } from './router/index'

function App() {
  return <HashRouter><RouterProvider router={router} /></HashRouter>
}

export default App
