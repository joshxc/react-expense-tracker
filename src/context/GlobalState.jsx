import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [],
};

// create context
export const GlobalContext = createContext(initialState);

// create context provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(tx) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: tx,
    });
  }
  function deleteAll() {
    if (state.transactions.length === 0) return;
    dispatch({
      type: 'DELETE_ALL',
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        deleteAll,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
