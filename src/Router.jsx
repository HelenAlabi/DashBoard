

import {createBrowserRouter} from "react-router-dom"
import DashBoardLayout from "./layouts/DashBoardLayout"
import Settings from "./pages/Settings"
import Users from "./pages/Users"
import Home from "./pages/Home"
import Notifications from "./pages/Notifications"


const router = createBrowserRouter([
    {
        path:"/",
        element : <DashBoardLayout/>,
        children:[
            {
                index: true,
                element:<Home/>
            },

            {
                path:"/settings",
                element:<Settings/>
            },

            {
                path:"/users",
                element:<Users/>
            },

            {
                path:"/notice",
                element:<Notifications/>
            }
        ]
    }
])



export default router