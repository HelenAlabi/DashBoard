
import { RouterProvider } from "react-router-dom"
import router from "./Router"
import UseContext from "./UseContext"

function App() {
 

  return (
    <>
      <UseContext>
           <RouterProvider router={router}/>
      </UseContext>
       
    </>
  )
}

export default App
