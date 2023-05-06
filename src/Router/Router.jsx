import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home";
import Catagories from "../catagories";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/catagories/:id',
                element: <Catagories/>,
                loader: ({params})=>fetch(`http://localhost:3000/categories/${params.id}`)
            }
        ]
    }
])

export default router;