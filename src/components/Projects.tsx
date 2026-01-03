import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Swift Grocery App",
    description:
      "A full-stack quick-commerce grocery delivery application inspired by Blinkit and Zepto. Features include real-time product inventory, cart management, secure checkout, and live order tracking.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    gradient: "from-emerald-400 to-green-600",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  return (
    <section id="projects" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Showcasing my expertise in full stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2, 
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card">
                <div
                  className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <motion.div
                    className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"
                  />
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm font-medium border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="flex-1 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 rounded-full shadow-md">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}