import { Navigate, Outlet, useOutletContext } from "react-router-dom"
import { Navbar } from "../layout/Navbar"


export const ProtectedRoute = () => {
    const context: any = useOutletContext()

    if (!context.user) {
        return <Navigate to="/Login" replace={true} />
    }

    return (
        <>
            <Navbar user={context.user} setUser={context.setUser}/>
            <Outlet context={context}/>
        </>
    )
}

