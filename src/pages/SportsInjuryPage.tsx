import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sportsInjuryImg from "@/assets/sports-injury.jpg";

const SportsInjuryPage = () => {
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
              Sports Injury Rehabilitation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Expert physiotherapy for athletes and active individuals
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <img
              src={sportsInjuryImg}
              alt="Sports Injury Rehabilitation"
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
              Sports Injury Recovery
            </h2>
            <p className="text-muted-foreground mb-6">
              Whether you're a professional athlete, weekend warrior, or fitness enthusiast, sports injuries can
              sideline you from the activities you love. Our specialized sports physiotherapy program is designed
              to get you back to your peak performance safely and effectively.
            </p>

            <h3 className="text-xl lg:text-2xl font-heading font-bold text-primary mb-4">
              Comprehensive Sports Rehabilitation
            </h3>
            <p className="text-muted-foreground mb-6">
              We understand the unique demands of athletic performance and the importance of returning to sport
              safely. Our evidence-based approach combines advanced manual therapy techniques, sport-specific
              rehabilitation exercises, and performance optimization strategies.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-secondary p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Injury Assessment</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive evaluation to understand the extent and nature of your injury
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Sport-Specific Rehab</h4>
                <p className="text-sm text-muted-foreground">
                  Exercises tailored to your sport and position requirements
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Performance Enhancement</h4>
                <p className="text-sm text-muted-foreground">
                  Techniques to improve strength, speed, and injury prevention
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Return to Play Protocol</h4>
                <p className="text-sm text-muted-foreground">
                  Structured progression to safely return to competitive activities
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

export default SportsInjuryPage;