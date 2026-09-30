import { Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-black dark:border-zinc-900/50 py-12 mt-auto">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-wider text-black dark:text-zinc-100 mb-1">MOHAMED YASSEN</h3>
            <p className="text-sm text-black dark:text-zinc-400">Front-End Developer • Business Analyst • System Analyst</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com/MohamedBA1" target="_blank" rel="noopener noreferrer" className="text-black dark:text-zinc-400 hover:text-accent-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:my1116243@gmail.com" className="text-black dark:text-zinc-400 hover:text-accent-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center md:text-left text-xs text-black">
          <p>&copy; 2026 Mohamed Yassen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
