import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/App.css';
import { StyleGuide } from "./pages/StyleGuide";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/design" element={<StyleGuide/>} />
      </Routes>
    </Router>
  );
}

export default App;
