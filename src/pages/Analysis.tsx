import AnimatedContainer from '../components/AnimatedContainer';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Building2, Landmark, Store, Home, Target, Lightbulb, TrendingUp } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "HR Management System",
    icon: <Building2 className="w-8 h-8 text-accent-500" />,
    role: "Business / System Analysis + Technical Contribution",
    details: [
      "Understanding HR requirements and business needs.",
      "Supporting the initial technical concept.",
      "Contributing to system implementation.",
      "Analyzing employee performance and efficiency.",
      "Preparing data-driven reports for responsible managers."
    ]
  },
  {
    id: 2,
    title: "Government Projects",
    icon: <Landmark className="w-8 h-8 text-accent-500" />,
    role: "System Analysis & Implementation Support",
    details: [
      "Understanding requirements across two government-related projects.",
      "System analysis and mapping of business processes.",
      "Technical implementation support.",
      "Extensive testing and validation against strict requirements."
    ]
  },
  {
    id: 3,
    title: "Company Stores & Outlets System",
    icon: <Store className="w-8 h-8 text-accent-500" />,
    role: "System Analysis + Technical Implementation + Business Analysis",
    details: [
      "Understanding complex operational requirements.",
      "Supporting technical system implementation.",
      "Analyzing sales figures and outlet performance.",
      "Supporting management decision-making through actionable data."
    ]
  },
  {
    id: 4,
    title: "Real Estate Development System",
    icon: <Home className="w-8 h-8 text-accent-500" />,
    role: "Business Analysis & Technical Contribution",
    details: [
      "Technical contribution to system implementation.",
      "Business and sales analysis.",
      "Market reach and target market analysis.",
      "Identifying business opportunities and potential problems."
    ]
  },
  {
    id: 5,
    title: "Agriculture Company System",
    icon: <Target className="w-8 h-8 text-accent-500" />,
    role: "Business Analysis & Technical Contribution",
    details: [
      "Technical contribution to the digital platform.",
      "Comprehensive business and sales analysis.",
      "Target market and product performance analysis.",
      "Identifying products with high potential for market success."
    ]
  },
  {
    id: 6,
    title: "Technology Company",
    icon: <Lightbulb className="w-8 h-8 text-accent-500" />,
    role: "Business Analyst / System Analyst",
    details: [
      "Analyzing development ideas and understanding business problems.",
      "Conducting market analysis.",
      "Identifying operational problems that could be solved through software.",
      "Translating business opportunities into viable technical concepts."
    ]
  },
  {
    id: 7,
    title: "Egyptian Traffic Units Sales Analysis",
    icon: <TrendingUp className="w-8 h-8 text-accent-500" />,
    role: "Data & Business Analysis",
    details: [
      "Analyzing sales numbers across different governorates.",
      "Comparing outlet performance and measuring sales efficiency.",
      "Identifying high and low performing locations.",
      "Supporting business decisions through detailed data analysis."
    ]
  }
];

const processSteps = [
  { step: "01", title: "Understand", desc: "Understand the business, users, and problem." },
  { step: "02", title: "Analyze", desc: "Analyze requirements, processes, data, and market context." },
  { step: "03", title: "Define", desc: "Translate findings into clear business and system requirements." },
  { step: "04", title: "Design", desc: "Define the system structure and user experience requirements." },
  { step: "05", title: "Validate", desc: "Test the solution against requirements and business needs." },
  { step: "06", title: "Improve", desc: "Use feedback, analysis, and results to identify improvements." }
];

const Analysis = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl py-12">
      <SectionHeader 
        title="Business & System Analysis" 
        subtitle="Turning business needs into clear, practical, and scalable digital solutions."
      />

      <AnimatedContainer delay={0.1} className="mb-20 text-center max-w-3xl mx-auto">
        <p className="text-black dark:text-zinc-300 text-lg leading-relaxed">
          I work across the full software development lifecycle—from understanding the core business needs to supporting technical implementation and analyzing the final results. My approach ensures that the systems built actually solve the right business problems.
        </p>
      </AnimatedContainer>

      {/* Process Section */}
      <section className="mb-24 relative">
        <h3 className="text-2xl font-bold text-center text-black dark:text-zinc-100 mb-12">The Analysis Process</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((item, idx) => (
            <AnimatedContainer key={item.step} delay={0.1 * idx}>
              <div className="glass-card p-8 rounded-2xl h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 text-6xl font-black text-black/20 group-hover:text-accent-500/10 transition-colors duration-500 select-none">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-accent-400 mb-3 relative z-10">{item.title}</h4>
                <p className="text-zinc-400 relative z-10">{item.desc}</p>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </section>

      {/* Case Studies Gallery */}
      <section>
        <h3 className="text-2xl font-bold text-center text-black dark:text-zinc-100 mb-12">Case Studies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <AnimatedContainer key={study.id} delay={0.1 * (idx % 4)} className={study.id === 7 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}>
              <div className="glass-card p-8 rounded-2xl h-full border-t-4 border-t-accent-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center border border-zinc-800">
                    {study.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-100">{study.title}</h4>
                  </div>
                </div>
                
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-400 bg-accent-500/10 px-3 py-1 rounded-full">
                    {study.role}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {study.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-zinc-400">
                      <span className="text-zinc-500 mr-3 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Analysis;
