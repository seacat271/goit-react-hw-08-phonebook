import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { authSelector } from "redux/auth/authSelectors";
export const AppBar = () => {
    const isLoggedIn = useSelector(authSelector)
    console.log(isLoggedIn)
    return (
        <>
        <Navigation/>
        {isLoggedIn ? <UserMenu/> :  <AuthNav/>}
       
        

        </>
    )
}