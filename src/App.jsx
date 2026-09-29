import { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen";
import FloatingThemeButton from "./components/theme/FloatingThemeButton";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [ready, setReady] = useState(false);
  const finishLoading = useCallback(() => setReady(true), []);

  return (
    <ThemeProvider>
      {ready ? null : <LoadingScreen onComplete={finishLoading} />}
      <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <FloatingThemeButton />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
