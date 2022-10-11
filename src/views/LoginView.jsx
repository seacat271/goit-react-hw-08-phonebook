import { useState } from "react";
import { useDispatch } from "react-redux"
import { login } from "redux/auth/authOperations";
import { useSelector } from "react-redux";
import { authSelector } from "redux/auth/authSelectors";

const LoginView = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange  = event => {
        const {name, value} = event.target
        switch (name) {
      case "email":
        return setEmail(value)
        case "password":
            return setPassword(value)
    default:
        return;
        }
    }

    const handleSubmit = event => {
    event.preventDefault();
        dispatch(login({ email, password}))

        setEmail("");
        setPassword("");
    }

    const isLoggedIn = useSelector(authSelector);
    if (isLoggedIn) return null;

    return (
        <div>
        <h1>Login page</h1>
        <form onSubmit={handleSubmit}>
<label> Email
    <input type="text" name = "email" value= {email} onChange={handleChange}/>
</label>
<label>Password
    <input type="text" name = "password" value= {password} onChange={handleChange}/></label>
<button type="submit">Log In</button>
        </form>
    </div>
    )
}

export default LoginView;