import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { isLoginActive } from "./middleware/auth";
import { Home } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFoundPage";
import { publicRoutes } from "./components/routes/PublicRoutes";
import { privateRoutes } from "./components/routes/PrivateRoutes";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            {publicRoutes}
            {privateRoutes()}
            {isLoginActive() ? (
              <Route key="not-found" path="*" element={<NotFoundPage />} />
            ) : (
              <Route key="login" path="*" element={<Home />} />
            )}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
