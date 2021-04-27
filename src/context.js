import {createContext} from 'react';

export const ShopContext = createContext();

export const ContextProvider = ({children}) => {
  const value = {
    exemple: 'hello from context',
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};