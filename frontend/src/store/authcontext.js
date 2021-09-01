import React, {useState} from 'react';

export const AuthContext = React.createContext();


export default function AuthProvider(props){

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));

    const setloginHandler = (val) => {
        setIsLoggedIn(val);
    }

    const defValues = {
        login:isLoggedIn,
        setlogin:setloginHandler
    }

    return (
        <AuthContext.Provider value={defValues}>
            {props.children}
        </AuthContext.Provider>
    )
};

