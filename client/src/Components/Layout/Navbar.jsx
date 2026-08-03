import React from "react";
import { personalDetails, navLinks } from "../../Constants/data";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-2.5 md:py-3 rounded-full mt-3 md:mt-4 mx-auto w-[92%] md:max-w-fit px-3 md:px-6 bg-surface/40 backdrop-blur-xl border border-white/10 shadow-xl shadow-inner-glow">
      <div className="flex items-center gap-4 md:gap-30">
        <span className="font-display-lg text-[15px] md:text-headline-md tracking-tighter text-on-surface whitespace-nowrap">
          {personalDetails.brand}
        </span>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-all duration-300 scale-95 active:scale-90 whitespace-nowrap"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="ml-0 md:ml-30 flex items-center gap-1.5 md:gap-2">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary animate-pulse"></div>
        <span className="font-label-sm text-[11px] md:text-label-md text-secondary whitespace-nowrap">
          {personalDetails.availability}
        </span>
      </div>
    </header>
  );
};

export default Navbar;
