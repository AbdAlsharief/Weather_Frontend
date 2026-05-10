import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest/50 border-t border-outline-variant/10 mt-auto">
      <div className="py-12 px-8 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-8">
        <div className="text-center md:text-left max-w-xs">
          <span className="text-xl font-bold text-on-surface block mb-1">Weather App</span>
          <p className="text-[10px] font-bold tracking-[0.1em] text-on-surface-variant/50 uppercase mb-4">
            AI Engineer Intern Assessment
          </p>
          <p className="text-[10px] text-slate-500 leading-relaxed italic">
            Developed by <span className="text-primary font-bold">Abdelrahman</span> for the PM Accelerator technical evaluation.
          </p>
        </div>
        
        <div className="text-center md:text-right max-w-md">
          <h4 className="text-[10px] font-bold text-on-surface uppercase tracking-widest mb-2">About PM Accelerator</h4>
          <p className="text-[11px] text-on-surface-variant/70 leading-relaxed">
            The Product Manager Accelerator program is designed to support PM professionals through every stage of their career. From landing your first PM role to scaling your impact as a Product Leader, we provide the mentorship, training, and community you need to succeed.
          </p>
          <a href="https://www.linkedin.com/school/pmaccelerator/posts/?feedView=all" target="_blank" className="text-[10px] text-primary font-bold hover:underline mt-2 inline-block">Learn more on LinkedIn</a>
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
