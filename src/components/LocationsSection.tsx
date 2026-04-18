import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import centralImg from "@/assets/image.png";
import northfieldImg from "@/assets/image copy.png";
import westsideImg from "@/assets/image copy 2.png";

const locations = [
  {
    name: "Central District",
    time: "Mon-Wed, 9AM – 5PM",
    buttonLabel: "ARKA Physiotherapy",
    buttonLink: "https://arkaphysiotherapy.janeapp.com/#/staff_member/",
    external: true,
    image: centralImg,
    imageAlt: "Central District clinic",
  },
  {
    name: "Northfield Center",
    time: "Thu-Fri, 10AM – 6PM",
    buttonLabel: "Book an appointment",
    buttonLink: "https://bc-ice.janeapp.com/#/staff_member/87",
    external: true,
    image: northfieldImg,
    imageAlt: "Northfield Center physiotherapist",
  },
  {
    name: "Westside Physio",
    time: "Saturday, 9AM – 2PM",
    buttonLabel: "Book an appointment",
    buttonLink: "https://phgsurrey.janeapp.com/locations/performance-health-group-surrey/book#/staff_member/89",
    external: true,
    image: westsideImg,
    imageAlt: "Westside Physio session",
  },
];

const LocationsSection = () => {
  return (
    <section id="where-i-work" className="scroll-mt-24 py-16 lg:py-24 bg-card">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-heading font-bold text-primary text-center mb-4"
        >
          Work Locations & Schedule
        </motion.h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          Visit me at any of these convenient locations
        </p>

        <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              className="rounded-3xl border-4 border-primary bg-card p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300 relative group"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 overflow-hidden relative z-10 group-hover:bg-primary/20 transition-colors duration-300">
                <img
                  src={loc.image}
                  alt={loc.imageAlt}
                  className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">{loc.name}</h3>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                <Clock className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium">Time: {loc.time}</span>
              </div>
              <motion.a
                href={loc.buttonLink}
                target={loc.external ? "_blank" : undefined}
                rel={loc.external ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 z-10 relative"
              >
                {loc.buttonLabel}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
