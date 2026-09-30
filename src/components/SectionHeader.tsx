import AnimatedContainer from './AnimatedContainer';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = false }: SectionHeaderProps) => {
  return (
    <AnimatedContainer className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-zinc-50">{title}</h2>
      {subtitle && (
        <p className="text-lg text-black dark:text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`h-1 w-16 bg-accent-500 mt-6 ${centered ? 'mx-auto' : ''} rounded-full`}></div>
    </AnimatedContainer>
  );
};

export default SectionHeader;
