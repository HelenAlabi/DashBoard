
import { useState } from "react"
import Input from "../inputs/Inputs";
import Lists from "../lists/List";
import Bell from "../../assets/bell.png"
import Moon from "../../assets/moon.png"
import "./Overlay.css"
const Overlay =()=>{

  const [listed, setListed] =useState([]);
  const[isOpen, setIsOpen]=useState(false);

  const inputListed =(inputListed)=>{
    setListed((prevData)=>[...prevData,inputListed])
  };

  const toggleHandler = ()=>{
    setIsOpen(!isOpen);
  };

    return(
        <>
           <div className= "allUsers">
           <div className= "upper_use">
               <div className= "users_emo">
                  <h2 id="usersW">Users</h2>
                 <div className= "emojis">
                 <img src={Bell} alt="" id="bell"/>
                 <img src={Moon} alt="" id="moon" />
               </div>
              </div>
              <div className= "user_Add">
                 <p id="mu">manage users</p>
                 <button onClick={toggleHandler} id="add">+Add Users</button>
              </div>
           </div>
           
             <Lists inputLists={listed}/>

             <Input inputSubmit={inputListed}
                    onClose={toggleHandler}
                    isOpen={isOpen}/>

           </div>
        </>
    )
}

export default Overlay;