import {createBrowserRouter} from "react-router-dom";
import Login from "./auth/Login.tsx";
import SignUp from "./auth/SignUp.tsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    }
])

export default router