import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
     <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
     </div>

    )
}