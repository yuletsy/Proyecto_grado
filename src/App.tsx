import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./components/Layout/ResponsiveAppBar";
import routes from "./components/routes/routes";

function App() {
  const routesMap = () => {
    const allRoutes = routes.map((actualroute) => (
      <Route
        key={0}
        path={actualroute.path}
        element={<actualroute.component />}
      />
    ));
    return [...allRoutes];
  };
  return (
    <div>
      <Router>
        <ResponsiveAppBar>
          <Routes>{routesMap()}</Routes>
        </ResponsiveAppBar>
      </Router>
    </div>
  );
}

export default App;
