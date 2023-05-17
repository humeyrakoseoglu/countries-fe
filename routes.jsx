import { useRoutes } from "react-router-dom";
import { Page404 } from "./pages/Page404";
import Homepage from "./src/pages/Home/Homepage";
import DetailPage from "./src/pages/Detail/Detailpage";

export const RouteList = () => {
  return useRoutes([
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/detail/:code",
          element: <DetailPage />,
        },
        {
          path: "*",
          element: <Page404 />,
        },
  ]);
};