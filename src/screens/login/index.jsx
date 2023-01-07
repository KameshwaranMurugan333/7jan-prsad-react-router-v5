import React from "react";
import { useHistory } from "react-router-dom";

export const Login = (props) => {

    const history = useHistory();

    const logInUser = () => {
        localStorage.setItem("auth_token", "token");
        history.push("/home");
    }

    React.useEffect(() => {
        if (localStorage.getItem("auth_token")) {
            history.push("/home")
        }
    }, []);

    return <div>
        <h1>Login</h1>
        <button onClick={logInUser}>Log In</button>
    </div>
}