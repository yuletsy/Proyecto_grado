import { Route} from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage";
import routes from "./routes";

export const privateRoutes = () => {
  const token = localStorage.getItem("token");

  if (token) {

      return routes.map((r) => (
        <Route
          key={r.path}
          path={r.path || ""}
          element={
            r.isPrivated ? (
                <r.component />
            ) : (
                <NotFoundPage/>
            )
          }
        />
      ));
    
  }
};
