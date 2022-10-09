export const LoginView = () => {
    return (
        <div>
            <h1>Login page</h1>
            <form>
    <label> Email
        <input type="text" name = "email" value= "" />
    </label>
    <label>Password
        <input type="text" name = "password" value= "" />
    </label>
<button type="submit">Enter</button>
            </form>
        </div>
    )
}