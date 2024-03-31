import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Visitings, About, Stay, Register, Error, Trek } from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Visitings />} />
          <Route path="/about" element={<About />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/trek" element={<Trek />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
