import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import LandingPage from "./pages/LandingPage";
import Nav from "./components/Nav";
import Footer from "./pages/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./components/context/ThemeProvider";
import LoadingScreen from "./components/LoadingScreen";
import NotFound from "./pages/NotFound";
import BlogSection from "./pages/BlogSection";   
import BlogPage from "./pages/BlogPage";         
import BlogPost from "./pages/BlogPost";

import CVSection from "./pages/CVSection";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500); // wait for fade animation
    }, 2000); // show splash for 2s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <ThemeProvider>
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/projects/:id" element={<ProjectDetail />} /> */}
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/blog" element={<BlogPage />} />       
          <Route path="/blog/:slug" element={<BlogPost />} /> 
          <Route path="/cv" element={<CVSection />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
