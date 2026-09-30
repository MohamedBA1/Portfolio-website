import { useState } from 'react';
import AnimatedContainer from '../components/AnimatedContainer';
import SectionHeader from '../components/SectionHeader';
import { ExternalLink, Github, Code2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const FrontEnd = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const activeProject = projects[currentIndex];

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const getOffset = (index: number, currentIndex: number, length: number) => {
    const half = Math.floor(length / 2);
    return ((index - currentIndex + length + half) % length) - half;
  };

  return (
    <div className="container mx-auto px-6 max-w-6xl py-12 flex flex-col min-h-[80vh]">
      <SectionHeader 
        title="Front-End Development" 
        subtitle="Selected digital experiences and interfaces I've worked on."
        centered={true}
      />

      <AnimatedContainer delay={0.1} className="flex-grow flex items-center justify-center relative mt-8 md:mt-16 w-full">
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevProject}
          className="absolute left-0 lg:-left-12 z-20 p-4 rounded-full bg-white dark:bg-black/80 backdrop-blur-md border border-black dark:border-zinc-800 text-black dark:text-zinc-400 hover:text-accent-400 hover:border-accent-500/50 transition-all hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          aria-label="Previous Project"
        >
          <ChevronLeft size={32} />
        </button>

        <button 
          onClick={nextProject}
          className="absolute right-0 lg:-right-12 z-20 p-4 rounded-full bg-white dark:bg-black/80 backdrop-blur-md border border-black dark:border-zinc-800 text-black dark:text-zinc-400 hover:text-accent-400 hover:border-accent-500/50 transition-all hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          aria-label="Next Project"
        >
          <ChevronRight size={32} />
        </button>

        <div className="relative w-full max-w-5xl h-[550px] overflow-visible rounded-[2rem] [perspective:1500px] flex items-center justify-center mx-auto">
          {projects.map((proj, index) => {
            const offset = getOffset(index, currentIndex, projects.length);
            const absOffset = Math.abs(offset);
            const sign = Math.sign(offset);
            const isActive = offset === 0;

            return (
              <motion.div
                key={proj.id}
                style={{ transformStyle: "preserve-3d" }}
                initial={false}
                animate={{
                  x: isActive ? "0%" : `${sign * 50}%`,
                  z: isActive ? 0 : -300 - (absOffset - 1) * 200,
                  rotateY: isActive ? 0 : -sign * 40,
                  scale: isActive ? 1 : 0.85 - (absOffset - 1) * 0.1,
                  zIndex: 10 - absOffset,
                  opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.4,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 30, mass: 1 }}
                className={`absolute w-[85%] h-[500px] group bg-black/90 backdrop-blur-md border border-zinc-800/50 rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(e, { offset: dragOffset, velocity }) => {
                  const swipe = swipePower(dragOffset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    nextProject();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevProject();
                  }
                }}
              >
                {/* Project Image Background */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-1000 group-hover:scale-105 bg-black">
                  {proj.images && proj.images.length > 0 ? (
                    <img src={proj.images[0]} alt={proj.title} className="w-full h-full object-cover opacity-60" />
                  ) : (
                    <Code2 className="w-48 h-48 text-black/20" />
                  )}
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/20 opacity-90 transition-opacity duration-500"></div>

                {/* Top links */}
                <div className={`absolute top-8 right-8 flex gap-4 z-20 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  <a href={proj.liveUrl} className="w-12 h-12 rounded-full bg-accent-500/10 backdrop-blur-md border border-accent-500/30 text-accent-400 flex items-center justify-center hover:bg-accent-500 hover:text-black transition-all duration-300 hover:scale-110 pointer-events-auto">
                    <ExternalLink size={20} />
                  </a>
                  <a href={proj.githubUrl} className="w-12 h-12 rounded-full bg-accent-500/10 backdrop-blur-md border border-accent-500/30 text-accent-400 flex items-center justify-center hover:bg-accent-500 hover:text-black transition-all duration-300 hover:scale-110 pointer-events-auto">
                    <Github size={20} />
                  </a>
                </div>

                {/* Main Content Area */}
                <div className={`absolute inset-0 p-6 md:p-10 flex flex-col justify-end z-10 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="mb-2 flex items-center gap-4">
                    <span className="px-3 py-1 bg-accent-500/10 border border-accent-500/20 rounded-full text-xs font-bold tracking-widest uppercase text-accent-400">
                      Project {index + 1} of {projects.length}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-50 mb-4 tracking-tight">
                    {proj.title}
                  </h3>
                  
                  <p className="text-zinc-300 text-base md:text-lg mb-6 leading-relaxed max-w-3xl line-clamp-2">
                    {proj.description}
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-3">
                      {proj.technologies.map(tech => (
                        <span key={tech} className="text-sm font-medium px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-zinc-300 backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-6 border-t border-zinc-800/50 max-w-3xl flex justify-between items-center pointer-events-auto">
                      <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                        <span className="text-accent-500 font-semibold mr-2 uppercase tracking-wide text-xs">Role & Contribution:</span> 
                        {proj.contribution}
                      </p>
                      <Link
                        to={`/frontend/${proj.id}`}
                        className="ml-4 flex-shrink-0 px-6 py-3 bg-accent-600 hover:bg-accent-500 text-zinc-50 font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-accent-600 via-accent-400 to-accent-600"></div>
              </motion.div>
            );
          })}
        </div>
      </AnimatedContainer>
    </div>
  );
};

export default FrontEnd;
