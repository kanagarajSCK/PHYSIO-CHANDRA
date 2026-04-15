import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const locations = [
  {
    name: "Central District",
    time: "Mon-Wed, 9AM – 5PM",
    buttonLabel: "Visit Eye Foundation",
    buttonLink: "https://www.theeyefoundation.com/",
    external: true,
  },
  {
    name: "Northfield Center",
    time: "Thu-Fri, 10AM – 6PM",
    buttonLabel: "Book an appointment",
    buttonLink: "#book",
    external: false,
  },
  {
    name: "Westside Physio",
    time: "Saturday, 9AM – 2PM",
    buttonLabel: "Book an appointment",
    buttonLink: "#book",
    external: false,
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

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border-4 border-primary bg-card p-8 text-center shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{loc.name}</h3>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Time: {loc.time}</span>
              </div>
              <motion.a
                href={loc.buttonLink}
                target={loc.external ? "_blank" : undefined}
                rel={loc.external ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm shadow-md"
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
