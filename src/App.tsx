import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/Product to clean';
import ContactPage from './pages/ContactPage';
import DocumentsPage from './pages/DocumentsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:currency" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;