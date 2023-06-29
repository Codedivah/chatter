import "./App.css";
import Analytics from "./components/home/Analytics";
import AddPost from "./components/page/AddPost";
import Layout from "./components/shared/Layout";
import RequiredAuth from "./components/shared/RequiredAuth";
import Login from "./pages/auth/Login";
import VerifyUser from "./pages/auth/VeryfyUser";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import { Route, Routes } from "react-router-dom";

const privateRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/featured",
    component: <Home />,
  },
  {
    path: "/recent",
    component: <Home />,
  },
  {
    path: "/analytics",
    component: <Analytics />,
  },
  {
    path: "/create",
    component: <AddPost />,
  },
];

function App() {
  return (
    <Routes>
      {privateRoutes.map(({ path, component }, idx) => {
        return (
          <Route
            key={idx}
            path={path}
            element={
              //@ts-expect-error not a jsx
              <RequiredAuth children={<Layout children={component} />} />
            }
          />
        );
      })}
      <Route path="landing" element={<Landing />} />
      <Route path="auth/:id" element={<Login />} />
      <Route path="verify/:userid/:token" element={<VerifyUser />} />
    </Routes>
  );
}

export default App;
