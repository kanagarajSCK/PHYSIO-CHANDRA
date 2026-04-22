import { Clock, MapPin, Phone } from "lucide-react";

const footerLocations = [
  {
    name: "South Surrey / Panorama",
    schedule: [
      "Monday 2PM – 7PM",
      "Wednesday 12PM – 7PM",
      "Friday 9AM – 1PM",
    ],
    address: "14818 60 Ave Unit 106, Surrey, BC V3S 0B5",
    phone: "(778) 564-5999",
    phoneHref: "tel:+17785645999",
  },
  {
    name: "Burnaby / New Westminster",
    schedule: [
      "Tuesday 8AM – 1PM",
      "Thursday 10AM – 7PM",
      "Saturday 3PM – 7PM",
    ],
    address: "7885 6th St #201, Burnaby, BC V3N 3N4",
    phone: "(604) 553-4000",
    phoneHref: "tel:+16045534000",
  },
  {
    name: "Surrey / Guildford",
    schedule: [
      "Monday 8AM – 1PM",
      "Tuesday 2PM – 7PM",
      "Friday 3PM – 7PM",
      "Saturday 8AM – 1PM",
    ],
    address: "10190 152A St, Surrey BC V3R 1J7",
    phone: "(604) 581-0232",
    phoneHref: "tel:+16045810232",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container grid gap-10 lg:grid-cols-[1fr_0.75fr_2.25fr]">
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">Physio Chandra</h3>
          <p className="text-sm opacity-80">Consistency is Key. Your journey to a pain-free life starts here.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm opacity-80">
            <a href="#home" className="block hover:opacity-100">Home</a>
            <a href="#about-me" className="block hover:opacity-100">About Me</a>
            <a href="#who-i-help" className="block hover:opacity-100">Who I Help</a>
            <a href="#where-i-work" className="block hover:opacity-100">Locations</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Locations & Schedule</h4>
          <div className="grid gap-4 md:grid-cols-3">
            {footerLocations.map((location) => (
              <div
                key={location.name}
                className="rounded-lg bg-primary-foreground/10 p-4 text-sm"
              >
                <h5 className="font-semibold leading-snug">{location.name}</h5>
                <div className="mt-3 flex items-start gap-2 text-primary-foreground/80">
                  <Clock size={15} className="mt-0.5 shrink-0" />
                  <div className="space-y-1">
                    {location.schedule.map((time) => (
                      <p key={time}>{time}</p>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-start gap-2 text-primary-foreground/80">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <p>{location.address}</p>
                </div>
                <a
                  href={location.phoneHref}
                  className="mt-3 flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground"
                >
                  <Phone size={15} className="shrink-0" />
                  {location.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60">
        &copy; 2026 Physio Chandra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
