import { Header, Navbar, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, History, Rdp, Services, Events, Contact, NoPage } from "./pages";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/history" element={<History />} />
        <Route path="/rdp" element={<Rdp />} />

        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
