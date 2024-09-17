import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header";
const AppLayout = () => {
  const location = useLocation();
  //
  return (
    <div>
      {["/", "/codeVerification", "/phoneVerification"].includes(
        location.pathname
      ) ? null : (
        <Header />
      )}
      <Outlet />
    </div>
  );
};

export default AppLayout;
