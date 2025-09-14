import { cn } from "@/lib/utils";
import heroBg from "@/assets/illuvium-hero-bg.jpg";
import illuviumLogo from "@/assets/illuvium-logo.svg";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section 
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        "bg-gradient-cosmic",
        className
      )}
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-deep-space/70" />
      
      {/* Floating glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow rounded-full animate-float opacity-60" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-secondary rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8 flex justify-center">
          <img 
            src={illuviumLogo} 
            alt="Illuvium Logo" 
            className="w-32 h-32 animate-glow-pulse"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          ILLUVIUM
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-stellar-glow">
          GAMENIGHT
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Community-driven gaming events showcasing the power of Illuvium's ecosystem
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg shadow-neon hover:shadow-purple transition-all duration-300 transform hover:scale-105">
            Explore Documentation
          </button>
          <button className="px-8 py-4 border-2 border-neon-purple text-neon-purple font-semibold rounded-lg hover:bg-neon-purple hover:text-primary-foreground transition-all duration-300 transform hover:scale-105">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
}