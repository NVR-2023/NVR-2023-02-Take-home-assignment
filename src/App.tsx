import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./ui/pages/homepage";
import Dashboard from "./ui/pages/dashboard";
import ComplianceTracker from "./ui/pages/compliance-tracker";
import Invoicer from "./ui/pages/invoicer";

import PrivateLayout from "./ui/layours/private-layout";
import { RouteGroupType } from "./types/global-types";

function App() {
  const PRIVATE_ROUTE_GROUP: RouteGroupType = {
    prefix: "Private/",
    layout: <PrivateLayout />,
    routeGroup: [
      {
        path: "admin/dashboard",
        page: <Dashboard />,
      },
      {
        path: "features/compliance-tracker",
        page: <ComplianceTracker />,
      },
      {
        path: "features/invoicer",
        page: <Invoicer />,
      },
    ],
  } as const;

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        {
          <Route element={PRIVATE_ROUTE_GROUP.layout}>
            {PRIVATE_ROUTE_GROUP.routeGroup.map((route, index) => (
              <Route
                path={`/${PRIVATE_ROUTE_GROUP.prefix}${route.path}`}
                element={route.page}
                key={index}
              />
            ))}
          </Route>
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
