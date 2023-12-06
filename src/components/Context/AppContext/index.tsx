import { createContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = createContext({});
const initialState = {};

function AppContainer({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleColorChange = (colorObj: string) => {
    Object.entries(colorObj).forEach(([property, color]) => {
      document.querySelector('body')!.style.setProperty(property, color);
    });
  };

  return (
    <AppContext.Provider value={{ ...state, handleColorChange }}>
      {children}
    </AppContext.Provider>
  );
}
export { AppContext };
export default AppContainer;
