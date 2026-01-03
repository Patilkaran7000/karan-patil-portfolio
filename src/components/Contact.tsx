import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, MapPin, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 80% 20%, oklch(0.7 0.2 250) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, oklch(0.7 0.2 300) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, oklch(0.7 0.2 250) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.a
                href="mailto:patil.karan7000@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-lg border border-border hover:border-primary transition-all group cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    Email
                  </h3>
                  <p className="text-muted-foreground text-sm break-all">
                    patil.karan7000@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919370797431"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-lg border border-border hover:border-primary transition-all group cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    Phone
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    +91 9370797431
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/Patilkaran7000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-lg border border-border hover:border-primary transition-all group cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    GitHub
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    @Patilkaran7000
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/karan-patil-8a0a3222b"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-lg border border-border hover:border-primary transition-all group cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    LinkedIn
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Connect with me
                  </p>
                </div>
              </motion.a>
            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                onClick={() =>
                  window.open("mailto:patil.karan7000@gmail.com", "_blank")
                }
                className="group"
              >
                Send Me a Message
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}