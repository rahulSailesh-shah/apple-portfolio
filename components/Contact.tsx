
import React from 'react';
import { 
  Mail, 
  PhoneCall, 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative space-y-16 py-12">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(var(--hero-glow))]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      {/* Section Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 w-fit">
            <MessageSquare size={12} className="text-[hsl(var(--hero-glow))]" />
            <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-white/50 code-text">Connectivity</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            The Connection.
          </h2>
          <p className="text-white/40 text-base md:text-lg font-light leading-relaxed">
            I'm always interested in discussing new opportunities, interesting projects, 
            or just talking about technology and system architecture.
          </p>
      </div>

      {/* Primary Action Buttons */}
      <div className="flex flex-col justify-between sm:flex-row items-start gap-4 pt-4">
         {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href="mailto:hello@example.com"
            className="group relative flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-tight code-text transition-all hover:scale-105 active:scale-95"
          >
            <Mail size={16} />
            <span>Send Email</span>
            <div className="absolute inset-0 bg-white blur-xl opacity-0 group-hover:opacity-20 transition-opacity rounded-xl" />
          </a>
          
          <a 
            href="#"
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm uppercase tracking-tight code-text transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            <PhoneCall size={16} className="text-white/40" />
            <span>Schedule Call</span>
          </a>
        </div>


        {/* Social Links */}
        <div className="flex items-center gap-4">
          {[
            { icon: <Github size={20} />, href: "#", label: "GitHub" },
            { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
            { icon: <Twitter size={20} />, href: "#", label: "Twitter" }
          ].map((social, i) => (
            <a 
              key={i}
              href={social.href}
              aria-label={social.label}
              className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 text-white/40 transition-all hover:text-white hover:bg-white/10 hover:border-white/20 group"
            >
              <div className="group-hover:scale-110 transition-transform">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
       
      </div>

    </section>
  );
};

