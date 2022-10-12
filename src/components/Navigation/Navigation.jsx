import { NavLink } from "react-router-dom";
import { Toolbar, AppBar, Typography } from "@mui/material";


export const Navigation = () => {
    return (
     <div>
        <NavLink to="/">
            <Typography color="white" underline="none">
                PhoneBook
            </Typography>
        </NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
     </div>

    )
}