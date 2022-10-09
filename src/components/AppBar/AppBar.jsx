import { Outlet } from "react-router-dom"
export const AppBar = () => {
    return (
        <>
        <h1>This is AppBar</h1>
        {/* <Navigation/>
        <AuthNav/>
        <UserMenu/> */}
<Outlet/>
        </>
    )
}