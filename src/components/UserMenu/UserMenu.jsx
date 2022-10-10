import { useSelector, useDispatch } from "react-redux";
import { userName } from "redux/auth/authSelectors";
import { logout } from "redux/auth/authOperations";
export const UserMenu = () => {
    const dispatch = useDispatch();
    const login = useSelector(userName)
    return (
        <div>
        <p>{login}</p>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>

    )
}