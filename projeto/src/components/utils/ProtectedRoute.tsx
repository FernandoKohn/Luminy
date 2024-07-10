import { Navigate, Outlet, useOutletContext, useLocation } from "react-router-dom"
import { Navbar } from "../layout/Navbar"


export const ProtectedRoute = () => {
    const context: any = useOutletContext()
    const location = useLocation()
    const url = location.pathname

    // if (!context.user) {
    //     return <Navigate to="/Login" replace={true} />
    // }

    return (
        <>
            <Outlet context={context}/>
        </>
    )
}

