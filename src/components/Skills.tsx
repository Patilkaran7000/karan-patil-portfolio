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
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 hover:border-primary/50">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}, ${skill.color}80)`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
