// import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";

import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";



function App() {
  return (
    <div>
      <AppHeader />
      <div>{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
}

export default App;
