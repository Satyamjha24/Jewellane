import React, { createContext, useState } from "react";

export const AdminAuthContext = createContext();

const AdminAuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [adminToken, setAdminToken] = useState("");

  const adminLoginContext = (adminToken) => {
    setIsAuth(true);
    setAdminToken(adminToken);
  };

  const adminLogout = () => {
    setIsAuth(false);
    setAdminToken("");
  };

  return (
    <AdminAuthContext.Provider
      value={{ isAuth, adminLoginContext, adminLogout, adminToken }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthContextProvider;
