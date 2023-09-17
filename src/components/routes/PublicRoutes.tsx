import { Route } from "react-router-dom";
import routes from "./routes";

export const publicRoutes = routes
.filter(r => !r.isPrivated)
.map(r => (
  <Route key={r.path} path={r.path || ""} element={<r.component />} />
));