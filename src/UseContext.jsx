


import { createContext, useState } from "react"

export const formContext = createContext();

const UseContext = ({children}) => {

  
    const [listed, setListed] =useState([]);

    const updateUsers = (data)=>{
        setListed(data)
    }

  return (
    <>
       <formContext.Provider value ={{listed,updateUsers}}>
          {children}
       </formContext.Provider>
    </>
  )
}

export default UseContext;