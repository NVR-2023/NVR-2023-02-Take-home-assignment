import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./ui/pages/homepage";
import Compliance from "./ui/pages/compliance";
import Dashboard from "./ui/pages/dashboard";
import Invoice from "./ui/pages/invoice";
import PrivateLayout from "./ui/layours/private-layout";
import { RouteGroupType } from "./types/global-types";

function App() {
  const PRIVATE_ROUTE_GROUP: RouteGroupType = {
    prefix: "Private/",
    routeGroup: [
      {
        path: "dashboard",
        page: <Dashboard />,
      },
      {
        path: "compliance",
        page: <Compliance />,
      },

      {
        path: "invoice",
        page: <Invoice />,
      },
    ],
  } as const;

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route element={<PrivateLayout />}>
          {PRIVATE_ROUTE_GROUP.routeGroup.map((route, index) => (
            <Route
              path={`/${PRIVATE_ROUTE_GROUP.prefix}${route.path}`}
              element={route.page}
              key={index}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
