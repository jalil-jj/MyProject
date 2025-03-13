import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../../Components/AdminPanel/Topbar/Topbar'
import Sidebar from '../../Components/AdminPanel/Sidebar/Sidebar'

export default function index() {
  return (
    <div>
      <Topbar />

      <div className='row'>
        <div className='col-3'>
          <Sidebar />
        </div>
        <div className='col-9'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
