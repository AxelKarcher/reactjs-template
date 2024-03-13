import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import HomePage from 'pages/HomePage/HomePage'
import './Router.scss'
import 'styles/classes.scss'

const Router = () => {
  return (
    <div id='router-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router