import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import headacheImg from "@/assets/headache.jpg";

const HeadachePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 lg:pb-24"
      >
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-heading font-bold text-primary mb-6"
            >
              Headache & Migraine Relief
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Specialized physiotherapy treatment for headache and migraine management
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <img
              src={headacheImg}
              alt="Headache and Migraine Treatment"
              className="w-full max-w-2xl mx-auto h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="prose prose-lg max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-6">
              Understanding Headache Disorders
            </h2>
            <p className="text-muted-foreground mb-6">
              Headaches and migraines can be debilitating, affecting work, relationships, and quality of life.
              While medication can provide relief, physiotherapy offers a drug-free approach to managing and
              preventing headache symptoms by addressing underlying musculoskeletal and postural issues.
            </p>

            <h3 className="text-xl lg:text-2xl font-heading font-bold text-primary mb-4">
              Physiotherapy for Headache Relief
            </h3>
            <p className="text-muted-foreground mb-6">
              Our specialized headache physiotherapy program focuses on identifying and treating the root causes
              of your headaches. We use evidence-based techniques to reduce muscle tension, improve posture,
              and restore normal movement patterns that contribute to headache development.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-secondary p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Manual Therapy</h4>
                <p className="text-sm text-muted-foreground">
                  Gentle techniques to release tension in neck and shoulder muscles
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Postural Correction</h4>
                <p className="text-sm text-muted-foreground">
                  Exercises and education to improve posture and reduce strain
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Trigger Point Release</h4>
                <p className="text-sm text-muted-foreground">
                  Targeted treatment of muscle knots that contribute to headaches
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Lifestyle Management</h4>
                <p className="text-sm text-muted-foreground">
                  Strategies to manage stress and prevent headache triggers
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => navigate('/')}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default HeadachePage;