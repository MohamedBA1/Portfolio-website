import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import FrontEnd from './pages/FrontEnd';
import ProjectDetails from './pages/ProjectDetails';
import Analysis from './pages/Analysis';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="frontend" element={<FrontEnd />} />
          <Route path="frontend/:id" element={<ProjectDetails />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
