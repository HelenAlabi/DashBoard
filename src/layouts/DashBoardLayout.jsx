



import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/navigation/sidebar/SideBar'
import"./DashBoardLayout.css"
import TopBar from '../components/navigation/tobar/TopBar'

const DashBoardLayout = () => {
  return (
    <div className='layoutDash'>
        {/* DashBoardLayout Page is Ready */}
        <SideBar/>
        <div className='outTop'> 
           
           <TopBar/>
           <Outlet/>
        </div>
    </div>
  )
}

export default DashBoardLayout
