import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black relative">
      {/* Futuristic Animated Background */}
      <div className="cyber-grid-wrapper">
        <div className="cyber-grid-container cyber-grid"></div>
      </div>

      <Navbar />
      <main className="flex-grow pt-24 pb-16 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
