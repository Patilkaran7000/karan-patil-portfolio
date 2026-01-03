import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import {
  Database,
  GitBranch,
  Container,
  Sparkles,
  Code2,
  Server,
} from "lucide-react";

const skills = [
  {
    category: "Version Control",
    icon: GitBranch,
    items: ["Git", "GitHub Copilot"],
    color: "oklch(0.7 0.2 30)",
  },
  {
    category: "CI/CD",
    icon: Server,
    items: ["Jenkins"],
    color: "oklch(0.7 0.2 120)",
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MongoDB", "PostgreSQL"],
    color: "oklch(0.7 0.2 200)",
  },
  {
    category: "DevOps",
    icon: Container,
    items: ["Docker"],
    color: "oklch(0.7 0.2 250)",
  },
  {
    category: "AI & Innovation",
    icon: Sparkles,
    items: ["AI Prompt Engineering"],
    color: "oklch(0.7 0.2 300)",
  },
  {
    category: "Development",
    icon: Code2,
    items: ["Full Stack Development"],
    color: "oklch(0.7 0.2 350)",
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            A diverse toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.category} variants={itemVariants}>
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}, ${skill.color}80)`,
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-1.5 bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium backdrop-blur-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}