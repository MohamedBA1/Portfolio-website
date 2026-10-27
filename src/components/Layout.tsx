import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ScrollProgress, ScrollToTop } from './ScrollProgress';
import { CustomCursor } from './CustomCursor';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-zinc-100 relative selection:bg-accent-500/30 selection:text-white">
      {/* Dynamic Scroll Progress Bar */}
      <ScrollProgress />

      {/* Cyberpunk Interactive Custom Cursor */}
      <CustomCursor />

      {/* Futuristic Animated Background */}
      <div className="cyber-grid-wrapper">
        <div className="cyber-grid-container cyber-grid"></div>
      </div>

      <Navbar />
      <main className="flex-grow pt-24 pb-16 relative z-10">
        <Outlet />
      </main>
      <Footer />

      {/* Back to top with live scroll percentage */}
      <ScrollToTop />
    </div>
  );
};

export default Layout;
