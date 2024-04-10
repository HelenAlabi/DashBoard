
import React ,{ useState } from "react";
import "./Inputs.css"


const Input = ({inputSubmit, onClose, isOpen})=>{

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
        inputSubmit(input);
    };
    
     
    return(
        <React.Fragment>
            {isOpen && (
                <div className= "allForms">
                <form action="" onSubmit={submitHandler} >
                    <input type="text"
                       placeholder="please input your name"
                       name="oruko" 
                       id="name"
                       value={input.oruko}
                       onChange={inputHandler}/> <br /> <br />

                    <input type="email" 
                      placeholder="please input a valid email address"
                      name="email" 
                      id="mail"
                      value={input.email}
                      onChange={inputHandler}/> <br /> <br />
                      
                    <input type="file" name="pix" id="img" onChange={inputHandler}/>
                    <div id="imgwidth">{input.pix }</div> <br /> <br />
                    <button id="use">Add Users</button>
                    <div className= "overlay__controls">
                      <button
                      className= "overlay__close"
                       type="button"
                       onClick={onClose} />
                  </div>
                  {/* {children} */}
                </form>
            </div>
            )}
        </React.Fragment>
    )
};

export default Input;