import { useSelector } from "react-redux";
import { authSelector } from "redux/auth/authSelectors";
const HomeView = () => {
    const isLoggedIn = useSelector(authSelector);
    return (
        <div>
            <h1>Welcome to Private Phonebook Service</h1>
            {(!isLoggedIn) && <p>To use our App, you need to register or log in.</p>}
        </div>
    )
}

export default HomeView;