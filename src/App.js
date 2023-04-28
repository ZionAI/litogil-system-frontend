import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from "./routes/Routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
