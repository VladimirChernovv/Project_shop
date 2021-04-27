import {createContext, useReducer} from 'react';
import {reducer} from './reducer';

export const ShopContext = createContext();


// Значение по умолчанию
const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

export const ContextProvider = ({children}) => {
   const [value, dispatch] = useReducer(reducer, initialState);

   value.closeAlert = () => {
     dispatch({type: 'CLOSE_ALERT'})
   };

   value.removeFromBasket = (itemId) => {
     dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}});
   };

  // const value = {
  //   exemple: 'hello from context',
  // };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};