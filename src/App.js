import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.css";
import { Home } from "./Components/Home";
import { View } from "./Components/View";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </Router>
  );
}
