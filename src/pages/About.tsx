import AnimatedContainer from '../components/AnimatedContainer';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';
import Canvas3D from '../components/Canvas3D';
import { TiltCard } from '../components/TiltCard';

const skills = {
  "Front-End Development": ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Responsive Web Development", "Component-Based Development", "API Integration", "UI Implementation", "Modern UI Development", "Git", "GitHub"],
  "Business & System Analysis": ["Requirements Gathering & Analysis", "Business Process Analysis", "Functional Requirements", "System Analysis & Design", "Workflow Analysis", "Business Problem Identification", "Solution Definition", "Stakeholder & Client Communication", "Business & Market Analysis", "Data-Driven Decision Support", "UI/UX Collaboration"],
  "Software Testing & Quality": ["Software Testing", "Functional Testing", "System Testing", "UI Testing", "Test Scenario Design", "Requirements Validation", "Bug Identification & Reporting", "Feature Validation", "Release & Acceptance Testing"],
  "Data & Technical Background": ["SQL", "Excel", "Power BI", "Python", "Pandas", "Data Analysis", "Data Visualization", "Database Design & Fundamentals", "Object-Oriented Programming", "Programming Fundamentals", "C#", "Data Structures"],
  "Modern Development & Productivity": ["Developer Tooling & Workflow", "Code Review & Best Practices", "Research & Problem Solving", "Development Productivity & Automation", "Technical Documentation", "Agile & Iterative Development"]
};

const About = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl">
      
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center gap-12 py-20 relative">
        {/* Interactive Isometric Hairline Laptop Element */}
        <div className="absolute inset-0 z-0 opacity-70 md:opacity-85 pointer-events-auto flex items-center justify-center md:justify-end md:pr-12">
          <Canvas3D />
        </div>

        <AnimatedContainer className="flex-1 text-center md:text-left relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-black dark:text-zinc-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            MOHAMED <span className="text-gradient-accent">YASSEN</span>
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl text-black dark:text-zinc-300 font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Front-End Developer • Business Analyst • System Analyst
          </motion.h2>
          <motion.p 
            className="text-black dark:text-zinc-400 text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Computer Science graduate with professional experience in Front-End Development, Business Analysis, and System Analysis. I combine technical knowledge with analytical thinking to understand business needs, translate requirements into practical systems, and build modern digital solutions.
          </motion.p>
          <motion.div 
            className="mt-8 flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a 
              href="/src/assets/Mohamed_Yassen_CV.pdf" 
              download="Mohamed_Yassen_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-black font-semibold rounded-lg hover:bg-accent-400 transition-colors shadow-[0_0_15px_rgba(20,184,166,0.3)]"
            >
              Download CV
            </a>
          </motion.div>
        </AnimatedContainer>
        
        <AnimatedContainer delay={0.2} className="flex-1 flex justify-center md:justify-end">
          <div className="relative group w-64 h-[350px] md:w-80 md:h-[450px] rounded-3xl p-2 bg-gradient-to-tr from-accent-500/20 to-accent-300/20 shadow-[0_0_40px_rgba(20,184,166,0.1)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(20,184,166,0.2)]">
            <div className="absolute inset-0 rounded-3xl bg-accent-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Replace with actual image */}
            <img src={profileImage} alt="Mohamed Yassen" className="w-full h-full object-cover object-top rounded-2xl relative z-10" />
          </div>
        </AnimatedContainer>
      </section>

      {/* About Section */}
      <section className="py-20 border-t border-black dark:border-zinc-900/50">
        <SectionHeader title="About Me" />
        <AnimatedContainer delay={0.1}>
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <p className="text-zinc-300 leading-relaxed text-lg mb-6">
              I hold a Bachelor’s Degree in Computer and Information Sciences from Mansoura University, Egypt (Graduated 2024, Information Systems Specialization). I achieved an overall grade of Very Good and an Excellent grade for my Graduation Project. Since then, I have gained practical experience working with software systems from both technical and analytical perspectives.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg mb-6">
              My experience bridges the gap between technical execution and business needs. I specialize in Front-End Development, Business Analysis, and System Analysis, which allows me to effectively gather and understand business requirements, collaborate closely with developers, and translate complex business problems into viable, scalable technical solutions.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Additionally, I have strong proficiency in both Arabic (Native) and English (Very Good), allowing me to communicate effectively with diverse stakeholders and clients.
            </p>
          </div>
        </AnimatedContainer>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-t border-black dark:border-zinc-900/50">
        <SectionHeader title="Skills & Expertise" subtitle="A comprehensive overview of my technical and analytical capabilities." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <AnimatedContainer key={category} delay={0.1 * idx}>
              <TiltCard className="rounded-2xl h-full" glowColor="rgba(20, 184, 166, 0.22)">
                <div className="glass-card p-8 rounded-2xl h-full border border-zinc-800/60 bg-zinc-950/70 backdrop-blur-xl">
                  <h3 className="text-xl font-semibold mb-6 text-accent-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-400 animate-ping inline-block"></span>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-4 py-2 text-sm bg-black/80 border border-zinc-800/80 rounded-lg text-zinc-300 hover:border-accent-500 hover:text-accent-300 hover:scale-105 hover:bg-accent-950/20 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </AnimatedContainer>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 border-t border-black dark:border-zinc-900/50">
        <SectionHeader title="Professional Experience" />
        <AnimatedContainer delay={0.1}>
          <div className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform -translate-x-1/2"></div>
            
            <div className="md:grid md:grid-cols-2 md:gap-12 relative mb-12 group">
              <div className="hidden md:flex flex-col justify-start items-end text-right pr-12 relative">
                {/* Timeline Dot */}
                <div className="absolute top-1 -right-[6.5px] w-3 h-3 rounded-full bg-accent-500 ring-4 ring-zinc-950 z-10 group-hover:scale-125 transition-transform duration-300"></div>
                <h3 className="text-2xl font-bold text-black dark:text-zinc-100">Merge Digital Solution</h3>
                <span className="text-accent-400 font-medium mt-1">September 2024 – Present</span>
              </div>
              
              <div className="glass-card p-8 rounded-2xl relative md:ml-12 border-l-2 md:border-l border-accent-500/50 md:border-zinc-800/50">
                {/* Mobile Header */}
                <div className="md:hidden mb-4">
                  <h3 className="text-xl font-bold text-zinc-100">Merge Digital Solution</h3>
                  <span className="text-accent-400 text-sm font-medium">September 2024 – Present</span>
                </div>
                
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Contributed to approximately 8 projects across various domains, focusing on translating complex business requirements into effective digital solutions.
                </p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2 mt-1">▹</span>
                    Front-End Development and UI/UX implementation.
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2 mt-1">▹</span>
                    Business & System Analysis to identify operational requirements.
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2 mt-1">▹</span>
                    Requirements Understanding and continuous Client Communication.
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2 mt-1">▹</span>
                    System Implementation and Technical Problem Solving.
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2 mt-1">▹</span>
                    Software Testing and quality validation.
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </AnimatedContainer>
      </section>

    </div>
  );
};

export default About;
