import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import therapistImg from "@/assets/therapist-portrait.jpg";
import chronicPainImg from "@/assets/chronic-pain.jpg";
import sportsInjuryImg from "@/assets/sports-injury.jpg";
import headacheImg from "@/assets/headache.jpg";

const conditions = [
  { title: "CHRONIC PAIN", image: chronicPainImg, path: "/chronic-pain" },
  { title: "SPORTS INJURY", image: sportsInjuryImg, path: "/sports-injury" },
  { title: "HEADACHE", image: headacheImg, path: "/headache" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % conditions.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + conditions.length) % conditions.length);
  const next = () => setCurrent((p) => (p + 1) % conditions.length);

  const handleImageClick = () => {
    navigate(conditions[current].path);
  };

  return (
    <section id="home" className="section-mint scroll-mt-24 py-12 lg:py-20">
      <div className="container grid lg:grid-cols-[1fr_400px] gap-8 items-center">
        {/* Carousel */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-card shadow-2xl max-w-2xl mx-auto h-96 md:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <img
                  src={conditions[current].image}
                  alt={conditions[current].title}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  width={800}
                  height={600}
                  onClick={handleImageClick}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent flex items-start justify-center pt-8">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white text-center">
                    {conditions[current].title}
                  </h2>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {conditions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-border"}`}
              />
            ))}
          </div>
        </div>

        {/* Therapist portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="hidden lg:block"
        >
          <motion.div
            className="rounded-2xl border-4 overflow-hidden shadow-2xl cursor-pointer relative"
            animate={{
              borderColor: [
                "hsl(var(--primary))",
                "#10b981",
                "#f59e0b",
                "#ef4444",
                "hsl(var(--primary))"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
          >
            <img src={therapistImg} alt="Physio Chandra" className="w-full h-[500px] object-cover" width={600} height={700} />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/50 flex items-end justify-center pb-6"
            >
              <div className="profile-name text-2xl font-heading font-bold text-white text-center">
                Chandra Matla
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-center mt-4"
          >
            {/* <Button size="lg" className="px-8 py-3">
              Book Consultation
            </Button> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
