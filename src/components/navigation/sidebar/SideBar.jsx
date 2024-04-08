


import NavLinks from "../navLinks/NavLinks"
import "./SideBar.css"
import{FaHome,FaUser} from "react-icons/fa"
import{AiOutlineSetting} from "react-icons/ai"
import { IoIosNotificationsOutline } from "react-icons/io";


const links =[
    {to:"/", icon: <FaHome/>, label: "Home",id:1},
    {to:"/users", icon: <FaUser/>, label: "Users",id:2},
    {to:"/settings", icon: <AiOutlineSetting/>, label: "Settings",id:3},
    {to:"/notice", icon: <IoIosNotificationsOutline/>, label: "Notifications",id:4}
]

const SideBar =()=>{
    return(
        <>
          <div id="side_wrapper" >
            <div id="links">
                {/* <NavLinks to={"/"}> <FaHome/>Home</NavLinks> */}
                {
                    links.map(({to, icon, label, id})=>(
                        <NavLinks key={id} to={to}>{icon} {label}</NavLinks>
                    ))
                }
            
            </div>
          </div>
        </>
    )
}

export default SideBar