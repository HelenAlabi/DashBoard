
import { useContext, useState } from "react"
import Input from "../inputs/Inputs";
import Bell from "../../assets/bell.png"
import Moon from "../../assets/moon.png"
import "./Overlay.css"
import { formContext } from "../../UseContext";
const Overlay =()=>{

  
  const {listed, updateUsers}= useContext(formContext);

  const [input, setInput]=useState({

    oruko:"",
    email:"",
    pix:""
});

const inputHandler =(event)=>{
    const{name, value, files}= event.target;
    setInput((preInputs)=>({
        ...preInputs,
        [name]:name==="pix"? URL.createObjectURL(files[0]):value,
    }));
}; 

const submitHandler = (event)=>{
    event.preventDefault();
    console.log(input);
    
    updateUsers((prevData)=>[...prevData,input]);

};


  const[isOpen, setIsOpen]=useState(false);


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
            
            <div className= "lists">

            {listed.map((data, index)=>{
              return(
                <div className= 'container' key={index}>
                   <img src={data.pix} alt="" id='pix' />
                    <h2 id='oruko'>{data.oruko}</h2>
                    <h3 id='email'>{data.email}</h3>
                </div>)
            })}

          
          </div>

             <Input 
                    onClose={toggleHandler}
                    isOpen={isOpen}
                    name ={input.oruko}
                    email ={input.email}
                    image ={input.pix}
                    inputer ={inputHandler}
                    submitter ={submitHandler}/>

           </div>
        </>
    )
}

export default Overlay;