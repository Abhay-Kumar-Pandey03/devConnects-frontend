import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";

import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

function AppRoutes() {
  const user = useSelector((store) => store.user);

  return (
    <Routes>
      <Route path="/" element={<Body />}>

        {/* ✅ ONLY THIS ROUTE CONTROLS REDIRECT */}
        <Route
          index
          element={
            user
              ? <Navigate to="/feed" replace />
              : <Navigate to="/login" replace />
          }
        />

        <Route path="login" element={<Login />} />
        <Route path="feed" element={<Feed />} />
        <Route path="profile" element={<Profile />} />
        <Route path="connections" element={<Connections />} />
        <Route path="requests" element={<Requests />} />

      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}
