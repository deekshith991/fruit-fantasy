import Footer from "./Footer"
import Header from "./Header";
import { useAuth } from "../context/AuthContext";

export default function Profile() {

    const { user } = useAuth() || {};

    return (
        <>
            <Header />
            <h1>profile</h1>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>No user is logged in.</p>
            )}
            <Footer />
        </>
    );
}