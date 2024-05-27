import { Suspense, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Draw } from "./routes/Draw";
import { Footer } from "./components/Footer";

function App() {
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
