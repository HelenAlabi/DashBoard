
import React from "react";
import "./Inputs.css"




const Input = ({ onClose, isOpen, name,email ,image ,inputer,submitter})=>{

    


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