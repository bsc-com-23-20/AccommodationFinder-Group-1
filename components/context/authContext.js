import {createContext, useEffect, useState} from "react"

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        setCurrentUser ({
            id: 1,
            name: "Kondwa Kachikuni",
            profile_picture: "../../images/user.png",
        });
    };

    useEffect(() =>{
        localStorage.setItem("user", JSON.stringfy(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}