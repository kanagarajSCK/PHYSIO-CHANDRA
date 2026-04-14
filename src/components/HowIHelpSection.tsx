import { motion } from "framer-motion";
import { Activity, Brain, Bone, Heart } from "lucide-react";

const methods = [
  { icon: Activity, title: "Manual Therapy", desc: "Hands-on techniques to reduce pain and restore movement." },
  { icon: Brain, title: "Neurological Rehab", desc: "Specialized care for stroke recovery and nerve disorders." },
  { icon: Bone, title: "Orthopedic Care", desc: "Joint and bone rehabilitation with targeted exercises." },
  { icon: Heart, title: "Cardio Physio", desc: "Breathing exercises and cardiac rehabilitation programs." },
];

const HowIHelpSection = () => {
  return (
    <section id="how-i-help" className="py-16 lg:py-24 section-mint">
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
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <m.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
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
