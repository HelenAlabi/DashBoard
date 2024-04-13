import React, { useContext } from "react"
import { formContext } from "../UseContext"


const Home =()=>{
    const{listed}= useContext(formContext)

    return(
        <React.Fragment>
            <h2>The total number of your Users are :{listed.length}</h2>
        </React.Fragment>
    )
}

export default Home