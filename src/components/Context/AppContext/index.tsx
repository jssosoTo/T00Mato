import { useContext, createContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = createContext({});
const initialState = {};

function AppContainer({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
}

export default AppContainer;
