import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // "react-router-dom": "^6.22.1",
import './App.css'
import Default from './layouts/Default';
import Home from './pages/Home';
import Page from './layouts/Page';
import About from './pages/About';
import PortfolioPage from './pages/PortfolioPage';
import Portfolio from './layouts/Portfolio';
import PortfolioEntry from './pages/PortfolioEntry';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';

  function App() {
    return (
      <Router basename="/">
        <Routes>
          {/* default layout */}
          <Route path="/" element={<Default />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          {/* page layout */}
          <Route path="/" element={<Page />}>
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/developer" element={<PortfolioPage type="developer" />} />
            <Route path="/photography" element={<GalleryPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<PortfolioPage type="posts" />} />
          </Route>
          {/* portfolio layout */}
          <Route element={<Portfolio />}>
            <Route path="/portfolio/:id" element={<PortfolioEntry />} />
            <Route path="/developer/:id" element={<PortfolioEntry type="developer" />} />
            <Route path="/photography/:id" element={<PortfolioEntry type="gallery" />} />
            <Route path="/blog/:id" element={<PortfolioEntry type="posts" />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    )
  }

export default App
