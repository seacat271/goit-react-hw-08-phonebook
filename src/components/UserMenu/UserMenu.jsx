import { useSelector, useDispatch } from "react-redux";
import { userMail } from "redux/auth/authSelectors";
import { logout } from "redux/auth/authOperations";
import { Button, Typography } from "@mui/material";
export const UserMenu = () => {
    const dispatch = useDispatch();
    const mail = useSelector(userMail)
    return (
        <div>
        <Typography component="p">Hello, {mail}</Typography>
        <Button onClick={() => dispatch(logout())}>Logout</Button>
      </div>

    )
}