import { Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container grid sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">Physio Chandra</h3>
          <p className="text-sm opacity-80">Consistency is Key. Your journey to a pain-free life starts here.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm opacity-80">
            <a href="#home" className="block hover:opacity-100">Home</a>
            <a href="#about-me" className="block hover:opacity-100">About Me</a>
            <a href="#who-i-help" className="block hover:opacity-100">Who I Help</a>
            <a href="#where-i-work" className="block hover:opacity-100">Locations</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <div className="space-y-2 text-sm opacity-80">
            <div className="flex items-center gap-2"><Phone size={14} /> +91 9390162611</div>
            <div className="flex items-center gap-2"><Mail size={14} /> hello@physiochandra.com</div>
            <div className="flex items-center gap-2"><Instagram size={14} /> @physiochandra</div>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60">
        © 2026 Physio Chandra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
