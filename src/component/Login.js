import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

    // getting data from AuthContext

    const { user, loginF, logoutF } = useAuth() || {};
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const onChangeHandle = (event) => {
        const { name, value } = event.target;
        setFormData(() => (
            { ...formData, [name]: value }

        ))
    }

    const ACCOUNT = { username: 'asd', password: 'asd' };
    // console.log("db pass" + ACCOUNT.username + '+' + ACCOUNT.password "& + ");


    function handleLogin() {
        if (formData.username === ACCOUNT.username && formData.password === ACCOUNT.password) {
            loginF(user);
            navigate("/gallery")
        } else {
            logoutF();
        }
    }
    return (
        <>
            <div id="LoginForm">
                <form>
                    <div id="LoginInput">
                        <label>Username: </label>
                        <input type='email/text' name='username' value={formData.username} onChange={onChangeHandle} placeholder="Username" />
                    </div>

                    <div id="LoginInput">
                        <label>Password: </label>
                        <input type="password" name='password' value={formData.password} onChange={onChangeHandle} placeholder="Password" />
                    </div>
                    <div id='LoginButtons'>
                        <button type="submit" onClick={handleLogin} >Log In</button>
                        <button type="reset" >cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}