import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {createContext} from 'react'

import HomePage from 'pages/HomePage/HomePage'
import './Router.scss'
import 'styles/classes.scss'

export const AppContext = createContext(null)

const Router = () => {
  return (
    <div id='router-container'>
      <BrowserRouter>
        <AppContext.Provider value={{}}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default Router