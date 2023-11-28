import { Routes, Route } from 'react-router-dom';
import { ReactElement } from 'react';
import Error from './pages/Error';

type RouteItem = {
  path: string;
  element: ReactElement;
  children?: RouteItem[];
};

function formatRoutes(routeItems: RouteItem[] | []): ReactElement[] {
  return routeItems.map(
    (routeItem: {
      path: string;
      element: ReactElement;
      children?: RouteItem[];
    }) => {
      return (
        <>
          <Route
            key={Date.now()}
            path={routeItem.path}
            element={routeItem.element}
          ></Route>
          {routeItem.children && formatRoutes(routeItem.children || [])}
        </>
      );
    }
  );
}

function App() {
  const routes = [];

  return (
    <Routes>
      {formatRoutes(routes)}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
