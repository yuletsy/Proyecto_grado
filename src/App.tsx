import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import routes from "./components/routes/routes";
import { isLoginActive } from "./middleware/auth";
import { Home } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  const renderRoutes = () => {
    let hasAccessToPrivateRoutes = false;
    if (isLoginActive()) {
      hasAccessToPrivateRoutes = true;
    }
    const allRoutes = routes.map((r) => {

      if (r.path === '/login' && isLoginActive()) {
        return null; 
      }

      if (!r.isPrivated) {
        return (
          <Route key={r.path} path={r.path || ""} element={<r.component />} />
        );
      }
      if (r.isPrivated && hasAccessToPrivateRoutes) {
        return (
          <Route key={r.path} path={r.path || ""} element={<r.component />} />
        );
      }
      return null;
    });
    return [
      ...allRoutes,
      isLoginActive() ? <Route key="not-found" path="*" element={<NotFoundPage />} />:  <Route key="login" path="*" element={<Home />} />
    ];
  };
  return (
    <div>
      <Router>
        <Layout>
          <Routes>{renderRoutes()}</Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
