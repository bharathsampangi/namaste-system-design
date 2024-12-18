import About from "./components/About";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import Accordion from "./components/Accordion";
import Comments from "./components/comments/Comments";

function App() {
  const [lang, setLang] = useState("en")

  return (
    <BrowserRouter>
      <header className="flex bg-black text-white font-bold text-2xl py-5 text-center">
        <nav className="px-20 m-2 w-[600px] flex justify-between text-lg">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/accordion">Accordion</a>
          <a href="/comments">Comments</a>
        </nav>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="text-black">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </header>
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route element={<ProtectedRoute />}>
          <Route path="/about" element={<About lang={lang}/>} />
        </Route>
        <Route path="/comments" element={<Comments />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
