import { useState } from "react";
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from "./components/Header";
import PdfOverlay from "./components/PdfOverlay";
import Success from "./components/Success";
import Currency from "./pages/currency";
import Form from "./pages/Form";
import Outbound from "./pages/Outbound";
import Test from "./pages/test";
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<Form/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/outbound" element={<Outbound/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/outbound/mmk" element={<Currency/>}/>
          <Route path="/outbound/usd" element={<Currency/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
