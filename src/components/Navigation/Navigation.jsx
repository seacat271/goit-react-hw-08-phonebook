import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "redux/auth/authSelectors";

export const Navigation = () => {
    const isLoggedIn = useSelector(authSelector);
    return (
     <div>
        <NavLink to="/">Home</NavLink>
        {/* {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>} */}
        <NavLink to="/contacts">Contacts</NavLink>
     </div>

    )
}