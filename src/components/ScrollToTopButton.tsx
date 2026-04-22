import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          title="Scroll to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, x: 28, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 28, scale: 0.8 }}
          whileHover={{ y: -4, scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed right-5 bottom-24 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl ring-2 ring-white/40 transition-colors duration-300 hover:bg-primary focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 lg:inline-flex"
        >
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
            }
            className="inline-flex"
          >
            <ArrowUp className="h-6 w-6" strokeWidth={2.5} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
