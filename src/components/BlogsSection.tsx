import { motion } from "framer-motion";
import blogImg from "@/assets/hero-physio.jpg";
import whoHelpImg from "@/assets/who-help.jpg";
import therapistImg from "@/assets/therapist-portrait.jpg";
import Posture from "@/assets/Posture.png";

const posts = [
  {
    title: "How Neck Adjustments Help Relieve Chronic Pain",
    excerpt:
      "Learn how cervical therapy and spinal alignment techniques can reduce stiffness, improve mobility, and ease daily discomfort.",
    meta: "Chiropractic Care · 5 min read",
    image: whoHelpImg,
  },
  {
    title: "How Resistance Therapy Improves Posture and Mobility",
    excerpt:
      "Targeted rehabilitation exercises help strengthen muscles, improve posture, and reduce everyday physical strain.",
    meta: "Physical Therapy · 4 min read",
    image: Posture,
  },
  {
    title: "Hands-On Therapy Techniques for Muscle and Joint Pain",
    excerpt:
      "Manual therapy helps reduce stiffness, improve movement, and support faster recovery from everyday physical strain.",
    meta: "Physiotherapy · 5 min read",
    image: blogImg,
  },
];

const BlogsSection = () => {
  return (
    <section id="blogs" className="relative scroll-mt-24 py-16 lg:py-24 section-mint overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-8 h-44 w-44 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-16 h-52 w-52 rounded-full bg-primary/15 blur-3xl" />

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Latest blogs
            </span>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary">
              Actionable recovery stories with a modern edge
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Explore practical physiotherapy insights, movement tips, and injury prevention content curated for stronger, pain-free daily living.
            </p>
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
            >
              Book a consultation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[2rem] overflow-hidden border border-border bg-card shadow-2xl"
          >
            <img
              src={blogImg}
              alt="Blog concept image"
              loading="lazy"
              className="w-full h-96 object-cover"
              width={900}
              height={600}
            />
            <div className="border-t border-border bg-background px-8 py-6">
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Pain Relief · 6 min read</p>
              <h3 className="mt-3 text-3xl font-semibold text-foreground">Effective Back and Shoulder Pain Treatment Options</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Discover evidence-based therapy methods designed to restore movement and relieve persistent muscular discomfort.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group overflow-hidden rounded-[2rem] border border-border bg-background shadow-2xl transition-transform duration-300 lg:flex lg:items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="relative h-72 lg:h-[380px] lg:w-5/12 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className={`w-full h-full object-cover transition duration-500 group-hover:scale-105 ${index % 2 === 1 ? "lg:-translate-x-4" : "lg:translate-x-4"}`}
                />
              </div>
              <div className="flex flex-col justify-between p-8 lg:w-7/12">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{post.meta}</p>
                  <h3 className="text-2xl font-semibold text-foreground">{post.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Read article
                  </span>
                  <a
                    href="#"
                    className="text-sm font-semibold text-primary transition hover:text-accent"
                  >
                    View details →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
