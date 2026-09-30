import { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowLeft, X, ZoomIn, ZoomOut, Github, Layers, User, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/projects';
import Canvas3D from '../components/Canvas3D';

/* ─── 3D Tilt Card ─────────────────────────────────────────────── */
const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── Lightbox Component (Improved Zoom) ─────────────────────────── */
interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox = ({ images, initialIndex, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden'; // prevent background scrolling
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [index, onClose]);

  const handleNext = () => {
    setZoom(1);
    setIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setZoom(1);
    setIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const toggleZoom = () => setZoom(z => (z === 1 ? 2.5 : 1));

  // Wheel to zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoom(z => {
      const newZoom = z + (e.deltaY < 0 ? 0.2 : -0.2);
      return Math.min(Math.max(newZoom, 1), 5);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-zinc-950/98 backdrop-blur-2xl flex flex-col w-screen h-screen overflow-hidden"
      onWheel={handleWheel}
    >
      {/* Top Toolbar (Counter and Action Buttons) */}
      <div className="absolute top-16 md:top-24 left-0 right-0 px-6 md:px-10 flex justify-between items-start z-[10000] pointer-events-none">
        <div className="text-zinc-400 text-xs md:text-sm font-medium tracking-widest pointer-events-auto bg-black/60 px-4 py-2 rounded-full border border-zinc-800 shadow-lg">
          {index + 1} / {images.length}
        </div>
        
        <div className="flex flex-col gap-4 pointer-events-auto">
          <button 
            onClick={onClose} 
            className="p-3 md:p-4 rounded-full bg-red-500/10 hover:bg-red-500 hover:text-white text-zinc-400 border border-red-500/20 transition-all shadow-lg"
            title="Close (Esc)"
          >
            <X size={24} />
          </button>
          <button onClick={toggleZoom} className="p-3 md:p-4 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-white transition-all border border-zinc-700 shadow-lg" title="Zoom">
            {zoom > 1 ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation Areas */}
      <div className="absolute left-0 top-0 bottom-0 w-1/6 z-40 cursor-pointer" onClick={handlePrev} />
      <div className="absolute right-0 top-0 bottom-0 w-1/6 z-40 cursor-pointer" onClick={handleNext} />

      {/* Main Image Container */}
      <div 
        ref={containerRef}
        className="flex-1 min-h-0 min-w-0 w-full h-full flex items-center justify-center overflow-hidden relative"
      >
        <button className="absolute left-4 md:left-8 z-50 p-4 md:p-5 rounded-full bg-black/50 hover:bg-accent-500 hover:text-white text-zinc-300 backdrop-blur-md transition-all border border-white/10 shadow-xl" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
          <ChevronLeft size={32} />
        </button>
        <button className="absolute right-4 md:right-8 z-50 p-4 md:p-5 rounded-full bg-black/50 hover:bg-accent-500 hover:text-white text-zinc-300 backdrop-blur-md transition-all border border-white/10 shadow-xl" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
          <ChevronRight size={32} />
        </button>

        <motion.img
          key={index}
          src={images[index]}
          alt={`Gallery view ${index + 1}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: zoom }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ maxHeight: '100%', maxWidth: '100%' }}
          className="object-contain cursor-grab active:cursor-grabbing"
          drag={zoom > 1}
          dragConstraints={containerRef}
          onDoubleClick={(e) => { e.stopPropagation(); toggleZoom(); }}
        />
      </div>

      {/* Thumbnails */}
      <div className="h-24 md:h-28 bg-zinc-950 border-t border-zinc-800/50 flex items-center justify-center gap-2 px-4 z-50 relative pointer-events-auto shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex gap-3 overflow-x-auto p-2 max-w-full no-scrollbar items-center">
          {images.map((img, i) => (
            <button 
              key={i} 
              onClick={(e) => { e.stopPropagation(); setZoom(1); setIndex(i); }}
              className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden transition-all ${
                i === index ? 'ring-2 ring-accent-500 opacity-100 scale-110 shadow-lg' : 'opacity-40 hover:opacity-100 border border-zinc-800'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Component ─────────────────────────────────────────────── */
const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === Number(id));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  if (!project) return <Navigate to="/frontend" />;

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500 selection:bg-accent-500/30">
      
      {/* ── FLOATING BACK BUTTON ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed top-24 left-4 md:left-8 z-40"
      >
        <Link
          to="/frontend"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-accent-500/50 shadow-sm transition-all duration-300 text-sm font-semibold group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </motion.div>

      {/* ── HERO SECTION ── */}
      <div ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background 3D & Gradient */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 dark:opacity-40 pointer-events-none z-0">
          <Canvas3D />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-100/50 to-zinc-50 dark:from-zinc-900/50 dark:to-zinc-950 pointer-events-none -z-10" />

        <motion.div 
          style={{ opacity, y }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10"
        >
          {/* Content */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="lg:col-span-7 flex flex-col justify-center">
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-600 dark:text-accent-400 text-xs font-bold tracking-widest uppercase">
                <Layers size={14} />
                {project.category}
              </span>
              <span className="text-zinc-400 dark:text-zinc-500 text-sm font-medium">
                {project.role}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]"
            >
              {project.title}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
              {project.description}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl transition-all shadow-[0_8px_20px_-6px_rgba(20,184,166,0.5)] hover:-translate-y-1"
              >
                <ExternalLink size={18} />
                Live Preview
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-white font-semibold rounded-xl transition-all shadow-sm border border-zinc-200 dark:border-zinc-700 hover:-translate-y-1"
              >
                <Github size={18} />
                Source Code
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Info Card */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="lg:col-span-5 lg:pl-10 relative">
            <TiltCard>
              <motion.div variants={fadeUp} className="p-8 rounded-3xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6">
                  <User size={24} className="text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Role & Contribution</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.contribution}
                </p>
              </motion.div>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>

      {/* ── MODERN MASONRY GALLERY ── */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-zinc-100 dark:bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Project Gallery</h2>
              <p className="text-zinc-500 dark:text-zinc-400">Click any image to zoom and explore details.</p>
            </div>
            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm text-zinc-500 dark:text-zinc-400">
              <ImageIcon size={20} />
            </div>
          </div>

          {/* CSS Columns for Masonry Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {project.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="break-inside-avoid"
              >
                <div 
                  className="relative rounded-2xl overflow-hidden group cursor-zoom-in bg-zinc-200 dark:bg-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-800/50"
                  onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
                >
                  <img 
                    src={img} 
                    alt={`Project screenshot ${idx + 1}`} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                      <ZoomIn className="text-white" size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={project.images}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;
