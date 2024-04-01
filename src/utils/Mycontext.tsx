import React, { createContext, useState, useContext, ReactNode } from 'react';  
  
type MyContextProps = {  
  // loding
  isLoading: boolean;  
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;  

  // 输入表单
  FormData:{
    name:string,
    mobile:string,
  }
  setFormData:(newValue:{name:string,mobile:string}) => void
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
  const [FormData, setFormData] = useState({
    name:'',
    mobile:''
  });  
  const contextValue: MyContextProps = {  
    isLoading,
    setLoading,
    FormData,
    setFormData,
  };  


  return (  
    <MyContext.Provider value={contextValue}>  
      {children}  
    </MyContext.Provider>  
  );  
};