import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import BookingDialog from "./BookingDialog";
import logoImg from "@/assets/logo.png"; // ✅ USE YOUR LOGO

const navLinks = [
  "Home",
  "Where I work",
  "Who I help",
  "How I help",
  "About me",
  "Blogs",
];

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
    setOpen(false); // Close mobile menu first so the page is visible

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        handleScrollTo(sectionId);
      }, 250);
    } else {
      setTimeout(() => {
        handleScrollTo(sectionId);
      }, 150);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border"
    >
      <div className="container flex items-center justify-between py-4">
        {/* ✅ ONLY LOGO IMAGE (NO TEXT) */}
        <div className="flex items-center">
  <motion.img
    src={logoImg}
    alt="Logo"
    className="h-20 sm:h-24 md:h-30 lg:h-36 w-auto object-contain cursor-pointer rounded-full shadow-md"    onClick={() => navigate("/")}    
    // animation
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    
    transition={{ duration: 0.4 }}
  />
</div>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-lg md:text-xl font-semibold text-primary hover:text-accent transition-colors relative group cursor-pointer"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <BookingDialog
            trigger={
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:block bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-shadow"
              >
                Book appointment
              </motion.button>
            }
          />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className="text-base font-semibold text-primary py-2 text-left hover:text-accent transition-colors"
                >
                  {link}
                </button>
              ))}
              <BookingDialog
                trigger={
                  <button
                    type="button"
                    className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-base text-center"
                  >
                    Book appointment
                  </button>
                }
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
