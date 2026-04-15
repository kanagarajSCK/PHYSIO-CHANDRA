import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import chronicPainImg from "@/assets/chronic-pain.jpg";

const ChronicPainPage = () => {
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
              Chronic Pain Management
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Specialized physiotherapy treatment for chronic pain conditions
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <img
              src={chronicPainImg}
              alt="Chronic Pain Treatment"
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
              Understanding Chronic Pain
            </h2>
            <p className="text-muted-foreground mb-6">
              Chronic pain is a complex condition that affects millions of people worldwide. Unlike acute pain,
              which serves as a warning signal for injury or illness, chronic pain persists long after the initial
              cause has healed. It can significantly impact quality of life, making even simple daily activities challenging.
            </p>

            <h3 className="text-xl lg:text-2xl font-heading font-bold text-primary mb-4">
              How Physiotherapy Helps
            </h3>
            <p className="text-muted-foreground mb-6">
              At Physio Chandra, we specialize in evidence-based physiotherapy approaches to manage chronic pain.
              Our comprehensive treatment plans combine manual therapy, exercise prescription, pain education,
              and lifestyle modifications to help you regain control of your life.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-secondary p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Manual Therapy</h4>
                <p className="text-sm text-muted-foreground">
                  Hands-on techniques to reduce pain and improve mobility
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Exercise Programs</h4>
                <p className="text-sm text-muted-foreground">
                  Customized exercises to strengthen and stabilize affected areas
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Pain Education</h4>
                <p className="text-sm text-muted-foreground">
                  Understanding pain mechanisms and self-management strategies
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Lifestyle Support</h4>
                <p className="text-sm text-muted-foreground">
                  Guidance on activity modification and ergonomic improvements
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

export default ChronicPainPage;