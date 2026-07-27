import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import ChatWidget from "./components/ChatWidget.jsx";
import Home from "./pages/Home.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AIToolsPage from "./pages/AIToolsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const openChat = () => setChatOpen(true);

  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home onOpenChat={openChat} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ai-tools" element={<AIToolsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage onOpenChat={openChat} />} />
        </Routes>
        <Footer />
        <ChatWidget open={chatOpen} onOpen={openChat} onClose={() => setChatOpen(false)} />
      </div>
    </BrowserRouter>
  );
}
