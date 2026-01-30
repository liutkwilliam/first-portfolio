import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // "react-router-dom": "^6.22.1",
import './App.css'
import Default from './layouts/Default';
import Home from './pages/Home';
import Page from './layouts/Page';
import About from './pages/About';
import PortfolioPage from './pages/PortfolioPage';
import Portfolio from './layouts/Portfolio';
import PortfolioEntry from './pages/PortfolioEntry';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* default layout */}
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        {/* page layout */}
        <Route path="/" element={<Page />}>
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Route>
        {/* portfolio layout */}
        <Route element={<Portfolio />}>
          <Route path="/portfolio/:id" element={<PortfolioEntry />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
