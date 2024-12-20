import About from "./components/About";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import Accordion from "./components/Accordion";
import Comments from "./components/comments/Comments";
import ImageSlider from "./components/image-slider/ImageSlider";
import Pagination from "./components/pagination/Pagination";
import LiveChat from "./components/live-chat/LiveChat";

function App() {
  const [lang, setLang] = useState("en")

  return (
    <BrowserRouter>
      <header className="flex bg-black text-white font-bold text-2xl py-5 text-center">
        <nav className="px-20 m-2 w-[800px] flex justify-between text-lg">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/accordion">Accordion</a>
          <a href="/comments">Comments</a>
          <a href="/image-slider">Image Slider</a>
          <a href="/pagination">Pagination</a>
          <a href="/live-chat">Live Chat</a>
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
        <Route path="/image-slider" element={<ImageSlider />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/live-chat" element={<LiveChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
