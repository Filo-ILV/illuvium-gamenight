import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
  variant?: "default" | "highlight";
}

export function InfoCard({ 
  title, 
  icon, 
  children, 
  className,
  variant = "default" 
}: InfoCardProps) {
  return (
    <div 
      className={cn(
        "relative p-8 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105",
        variant === "default" && "bg-card/80 border-border shadow-card hover:shadow-neon",
        variant === "highlight" && "bg-gradient-secondary/10 border-neon-purple shadow-purple hover:shadow-neon",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-lg bg-gradient-primary/20 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
        
        <div className="text-muted-foreground space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}