import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./ui/pages/homepage";
import Dashboard from "./ui/pages/dashboard";
import ComplianceTracker from "./ui/pages/compliance-tracker";
import Invoicer from "./ui/pages/invoicer";
import Settings from "./ui/pages/settings";
import Account from "./ui/pages/account";

import PrivateLayout from "./ui/layouts/private-layout";
import { RouteGroupType } from "./types/global-types";

function App() {
  const PRIVATE_ROUTE_GROUP: RouteGroupType = {
    prefix: "Private/",
    layout: <PrivateLayout />,
    routeGroup: [
      {
        path: "dashboard",
        page: <Dashboard />,
      },
      {
        path: "compliance-tracker",
        page: <ComplianceTracker />,
      },
      {
        path: "invoicer",
        page: <Invoicer />,
      },
      {
        path: "settings",
        page: <Settings />,
      },
      {
        path: "account",
        page: <Account />,
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
