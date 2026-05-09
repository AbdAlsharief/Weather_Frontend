import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest/50 border-t border-outline-variant/10 mt-auto">
      <div className="py-12 px-8 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-8">
        <div className="text-center md:text-left">
          <span className="text-xl font-bold text-on-surface block mb-1">Weather</span>
          <p className="text-[9px] font-bold tracking-[0.1em] text-on-surface-variant/50 uppercase">
            Precision Meteorological Data
          </p>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8">
          <FooterLink label="Developer Credits" />
          <FooterLink label="Terms of Service" />
          <FooterLink label="Privacy Policy" />
        </nav>
        
        <div className="text-center md:text-right max-w-xs">
          <p className="text-[10px] text-slate-500 leading-relaxed italic uppercase tracking-wider">
            "PM Accelerator is a professional ecosystem for product leaders, accelerating careers through training and certification."
          </p>
        </div>
      </div>
    </footer>
  );
};

function FooterLink({ label }: { label: string }) {
  return (
    <a className="text-[10px] font-bold tracking-widest text-on-surface-variant hover:text-secondary transition-all uppercase" href="#">
      {label}
    </a>
  );
}
