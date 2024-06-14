
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    const loginF = (userData) => {
        setUserData(userData);
    }

    const logoutF = () => {
        setUserData(null);
    }


    return (
        <AuthContext.Provider value={{ userData, loginF, logoutF }}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => {
    return useContext(AuthContext);
}