import React, { createContext, useState, useContext, ReactNode } from 'react';  
  
type MyContextProps = {  
  // loding
  isLoading: boolean;  
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;  

};  
  
const MyContext = createContext<MyContextProps | null>(null);  
  
export const useMyContext = () => {  
  const context = useContext(MyContext);  
  if (context === null) {  
    throw new Error('useLoadingContext must be used within a LoadingProvider');  
  }  
  return context;  
};  
  
export const MyContextProvider = ({ children }: { children: ReactNode }) => {  
  const [isLoading, setLoading] = useState(false);   
  const contextValue: MyContextProps = {  
    isLoading,
    setLoading,
  };  


  return (  
    <MyContext.Provider value={contextValue}>  
      {children}  
    </MyContext.Provider>  
  );  
};