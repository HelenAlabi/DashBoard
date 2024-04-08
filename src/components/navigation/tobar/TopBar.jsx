


import "./TobBar.css"
import Avat from "../../../assets/avatar.png"

const TopBar =()=>{
    return(
        <>
          <div className="topbar">
             <div id="wel"><h2>Welcome Helen</h2></div>
             <div id="img"><img src={Avat} alt="" /></div>
             
          </div>
        </>
    )
}

export default TopBar