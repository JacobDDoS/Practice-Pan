import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/App.css';
import { BlogPost } from "./pages/Blogs/BlogPost";
import { StyleGuide } from "./pages/StyleGuide";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/design" element={<StyleGuide/>} />
        <Route path="/blog/entry/:entryId" element={<BlogPost/>} />
      </Routes>
    </Router>
  );
}

export default App;
