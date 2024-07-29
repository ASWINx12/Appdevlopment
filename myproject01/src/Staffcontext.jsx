import React, { createContext, useState } from 'react';

export const StaffContext = createContext();

export const StaffProvider = ({ children }) => {
  const [staffDetails, setStaffDetails] = useState([]);

  return (
    <StaffContext.Provider value={{ staffDetails, setStaffDetails }}>
      {children}
    </StaffContext.Provider>
  );
};
