import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
export const AppBar = () => {
    return (
        <>
        <Navigation/>
        <AuthNav/>
        <UserMenu/>

        </>
    )
}