import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./inc/Header";
import Main from "./inc/Main";
import Aboutus from "./inc/Aboutus";
import Product from "./inc/Product";
import Lecture from "./inc/Lecture";
import Contact from "./inc/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/lecture" element={<Lecture />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;