import React, { createContext, useContext, useState } from "react"

const fakeAuth = {
    isAuthenticated: false,
    signin(cb: Function) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb: Function) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  }
  

const defaultValue = {
  // que lo saque del local storage?
  user: "",
}

const authContext = createContext(defaultValue);
  
type AuthTypes = {
  children: React.ReactChild;
}

export const ProvideAuth: React.FC<AuthTypes> = ({ children })  => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}
  
export const useAuth = () => {
  return useContext(authContext);
}
  
const useProvideAuth = () => {
  const [user, setUser] = useState("");
  
  const signin = (cb: Function) => {
    // guardar en local storage
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb: Function) => {
    //borrar de local storage
    return fakeAuth.signout(() => {
      setUser("");
      cb();
    });
  };
  
  return {
    user,
    signin,
    signout
  };
}
  