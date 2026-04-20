import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const navLinks = [
  "Home",
  "Where I work",
  "Who I help",
  "How I help",
  "About me",
  "Blogs",
];

const BOOK_APPOINTMENT_SECTION = "Where I work";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (link: string) => {
    const sectionId = link.toLowerCase().replace(/\s/g, "-");
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        handleScrollTo(sectionId);
      }, 250);
      return;
    }

    setTimeout(() => {
      handleScrollTo(sectionId);
    }, 150);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border"
    >
      <div className="container flex items-center justify-between py-5">

        {/* Logo */}
        <div className="flex items-center">
          <motion.img
            src={logoImg}
            alt="Logo"
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain cursor-pointer rounded-full shadow-md"
            onClick={() => navigate("/")}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => handleNavClick(link)}
              className="text-xl lg:text-2xl font-semibold text-primary hover:text-accent transition-all duration-300 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <motion.button
            type="button"
            onClick={() => handleNavClick(BOOK_APPOINTMENT_SECTION)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block bg-accent text-accent-foreground px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition"
          >
            Book appointment
          </motion.button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary"
        >
          {open ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="container py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className="text-lg font-semibold text-primary py-2 text-left hover:text-accent transition"
                >
                  {link}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick(BOOK_APPOINTMENT_SECTION)}
                className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg text-center"
              >
                Book appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;