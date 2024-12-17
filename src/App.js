import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="/comments" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
