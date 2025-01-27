import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {

    // getting data from AuthContext

    const { loginF } = useAuth();


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
    console.log(ACCOUNT.username + '+' + ACCOUNT.password);


    function handleSubmit() {
        alert(`Login 
            ${formData.username},
            ${formData.password}
            `);
        loginF(ACCOUNT);
    }

    return (
        <>
            <div id="LoginForm">
                <form onSubmit={handleSubmit}>
                    <div id="LoginInput">
                        <label>Username: </label>
                        <input type='email/text' name='username' value={formData.username} onChange={onChangeHandle} placeholder="Username" />
                    </div>

                    <div id="LoginInput">
                        <label>Password: </label>
                        <input type="password" name='password' value={formData.password} onChange={onChangeHandle} placeholder="Password" />
                    </div>
                    <div id='LoginButtons'>
                        <button type="submit" >Log In</button>
                        <button type="reset" >cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}