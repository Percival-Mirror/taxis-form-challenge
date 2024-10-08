import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { TaxisPage } from './pages/TaxisPage'

function App() {

  return (
    <>
      <main className='  bg-gray-200 min-h-screen overflow-y-auto md:overflow-hidden'>
        <div className=' flex h-screen flex-col md:flex-row'>
          <SideBar></SideBar>
          <div className=' w-full'>
            <NavBar></NavBar>
            <Routes>
              <Route path='/' element={<HomePage></HomePage>}></Route>
              <Route path='/taxis' element={<TaxisPage></TaxisPage>}></Route>
            </Routes>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
