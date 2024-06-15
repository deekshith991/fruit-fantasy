import { useAuth } from "../context/AuthContext";

export default function Logout() {
    const { logoutF } = useAuth() || {};

    return (<button onClick={logoutF} > Logout</button>);

}