import { useSelector } from "react-redux";

export const UserMenu = () => {
    const login = useSelector(state => state.auth.user.name)
    return (
        <div>
        <p>{login}</p>
        <button>Logout</button>
      </div>

    )
}