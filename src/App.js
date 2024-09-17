//
//
//
import { Suspense } from "react";
import AppLayout from "../src/layout";
import Home from "../src/pages/home/home";
import Shop from "../src/pages/home/shop";
import Welcome from "../src/pages/welcome";
import Cart from "../src/pages/productsCart";
import Camera from "../src/pages/home/camera";
import Services from "../src/pages/home/service";
import { Route, Routes } from "react-router-dom";
import CodeVerification from "../src/pages/codeVerification";
import PhoneVerification from "../src/pages/phoneVerification";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Welcome />} />
            <Route path="phoneVerification" element={<PhoneVerification />} />
            <Route path="codeVerification" element={<CodeVerification />} />
            <Route path="home" element={<Home />}>
              <Route index element={<Services />} />
              <Route path="camera" element={<Camera />} />
              <Route path="shop" element={<Shop />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
