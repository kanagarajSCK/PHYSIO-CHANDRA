import { motion } from "framer-motion";
import therapistImg from "@/assets/therapist-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about-me" className="py-16 lg:py-24 section-mint">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-border cursor-pointer"
            whileHover={{
              rotateY: 15,
              rotateX: 10,
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img src={therapistImg} alt="Chandra - Physiotherapist" loading="lazy" className="w-full h-[450px] object-cover" width={600} height={700} />
          </motion.div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/20 animate-float" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">About Me</h2>
          <p className="text-lg font-semibold text-primary mb-4">
            Welcome! I am Chandra, a dedicated clinical physiotherapist.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            With extensive experience in helping patients overcome pain, regain mobility, and elevate their performance, I am deeply committed to your physiological wellbeing.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My approach goes beyond simply treating the symptoms; I look at the whole picture to uncover the root cause of your discomfort. Through evidence-based techniques and personalized treatment plans, I ensure lasting results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
