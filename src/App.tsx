import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { Draw } from "./routes/Draw";
import { Footer } from "./components/Footer";
import ReactGA from 'react-ga4';

const TRACKING_ID = import.meta.env.VITE_GA_PROPERTYID;
ReactGA.initialize(TRACKING_ID);

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.send('pageview');
    console.log("Google analytics")
  }, [location]);
  return (
    <>
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path="/" element={<Draw></Draw>} />
        </Routes>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
