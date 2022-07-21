import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
