import React, { createContext, useState } from "react";

export const AdminAuthContext = createContext();

const AdminAuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [adminToken, setAdminToken] = useState("");
  const [isUserAuth, setIsUserAuth] = useState(false);
  const [userToken, setUserToken] = useState("");

  const adminLoginContext = (adminToken) => {
    setIsAuth(true);
    setAdminToken(adminToken);
  };

  const adminLogout = () => {
    setIsAuth(false);
    setAdminToken("");
  };

  const userLoginContext = (userToken) => {
    setIsUserAuth(true);
    setUserToken(userToken);
  };

  const userLogout = () => {
    setIsUserAuth(false);
    setUserToken("");
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuth,
        adminLoginContext,
        adminLogout,
        adminToken,
        isUserAuth,
        userLoginContext,
        userLogout,
        userToken,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthContextProvider;
