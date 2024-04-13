
import React from "react";
import "./Inputs.css"



<<<<<<< HEAD
const Input = ({ onClose, isOpen, name,email ,image ,inputer,submitter})=>{
=======
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
        localStorage.setItem("users", JSON.stringify(input))
    };
>>>>>>> 8650cc9156bb87b71807ccf04a5ccc3bab3cddb7
    

    return(
        <React.Fragment>
            {isOpen && (
                <div className= "allForms">
                <form action="" onSubmit={submitter} >
                    <input type="text"
                       placeholder="please input your name"
                       name="oruko" 
                       id="name"
                       value={name}
                       onChange={inputer}/> <br /> <br />

                    <input type="email" 
                      placeholder="please input a valid email address"
                      name="email" 
                      id="mail"
                      value={email}
                      onChange={inputer}/> <br /> <br />

                    <input type="file" name="pix" id="img" onChange={inputer}/>
                    <div id="imgwidth">{image}</div> <br /> <br />
                    <button id="use">Add Users</button>
                    <div className= "overlay__controls">
                      <button
                      className= "overlay__close"
                       type="button"
                       onClick={onClose} />
                  </div>
                </form>
            </div>
            )}
        </React.Fragment>
    )
};

export default Input;