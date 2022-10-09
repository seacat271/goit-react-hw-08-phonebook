export const RegisterView = () => {
    return (
        <div>
        <h1>Login page</h1>
        <form>
<label> Name
<input type="text" name = "name" value= "" />

</label>
<label> Email
    <input type="text" name = "email" value= "" />
</label>
<label>Password
    <input type="text" name = "password" value= "" /></label>
<button type="submit">Register</button>
        </form>
    </div>
    )
}