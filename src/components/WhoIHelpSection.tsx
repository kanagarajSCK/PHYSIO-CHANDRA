import { motion } from "framer-motion";
import whoHelpImg from "@/assets/who-help.jpg";

const categories = [
  { title: "Athletes and Sports Enthusiasts", desc: "Eliminate weak points, prevent recurring injuries, and return stronger—not just “recovered.”" },
  { title: "Older Adults Who Refuse to Slow Down", desc: "Build stability, reduce joint pain, and stay independent without relying on medication." },
  { title: "Desk-Bound Professionals", desc: "Fix chronic back, neck, and posture issues caused by long hours at a desk." },
  { title: "Post-Surgery Clients", desc: "Recover faster, regain full function, and avoid long-term complications with structured rehabilitation." },
];

const WhoIHelpSection = () => {
  return (
    <section id="who-i-help" className="py-16 lg:py-24 bg-card">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, rotate: -3 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-2xl border-4 border-border"
        >
          <img src={whoHelpImg} alt="Physiotherapy treatment" loading="lazy" className="w-full h-[400px] object-cover" width={600} height={600} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">Who I Help</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I help people who are tired of living with pain, limitations, or recurring injuries—and want a clear, results-driven path back to full strength and mobility.
          </p>

          <div className="space-y-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <h3 className="text-lg font-bold text-primary">{cat.title}</h3>
                <p className="text-muted-foreground">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIHelpSection;
