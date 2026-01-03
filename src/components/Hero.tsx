import { motion } from "framer-motion";
import { Github, Mail, ArrowDown, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const appleEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, oklch(0.9 0.1 250) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, oklch(0.9 0.1 300) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, oklch(0.9 0.1 250) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: appleEase }}
          >
            <motion.h1
              className="text-5xl md:text-8xl font-bold tracking-tighter mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: appleEase }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Karan Patil
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl text-muted-foreground mb-8 font-medium tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: appleEase }}
          >
            Full Stack Software Developer
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: appleEase }}
          >
            Crafting elegant solutions with modern technologies. Passionate about
            building scalable applications and exploring the latest in web development.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: appleEase }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group rounded-full px-8 h-12 text-base"
            >
              Get In Touch
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="rounded-full px-8 h-12 text-base backdrop-blur-sm bg-background/50"
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1, ease: appleEase }}
          >
            {[
              { href: "https://github.com/Patilkaran7000", Icon: Github },
              { href: "https://www.linkedin.com/in/karan-patil-8a0a3222b", Icon: Linkedin },
              { href: "mailto:patil.karan7000@gmail.com", Icon: Mail },
              { href: "tel:+919370797431", Icon: Phone },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="p-4 rounded-full bg-secondary/50 backdrop-blur-md border border-border/50 hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <item.Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
      </motion.div>
    </section>
  );
}