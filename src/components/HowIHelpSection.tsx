import { motion } from "framer-motion";
import therapistImg from "@/assets/therapist-portrait.jpg";
import headacheImg from "@/assets/headache.jpg";
import sportsInjuryImg from "@/assets/sports-injury.jpg";
import chronicPainImg from "@/assets/chronic-pain.jpg";

const methods = [
  { image: therapistImg, title: "Manual Therapy", desc: "Hands-on techniques to reduce pain and restore movement." },
  { image: headacheImg, title: "Neurological Rehab", desc: "Specialized care for stroke recovery and nerve disorders." },
  { image: sportsInjuryImg, title: "Orthopedic Care", desc: "Joint and bone rehabilitation with targeted exercises." },
  { image: chronicPainImg, title: "Cardio Physio", desc: "Breathing exercises and cardiac rehabilitation programs." },
];

const HowIHelpSection = () => {
  return (
    <section id="how-i-help" className="scroll-mt-24 py-16 lg:py-24 section-mint">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-heading font-bold text-primary text-center mb-16"
        >
          How I Help
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors overflow-hidden">
                <img src={m.image} alt={m.title} className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">{m.title}</h3>
              <p className="text-muted-foreground text-sm">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIHelpSection;
