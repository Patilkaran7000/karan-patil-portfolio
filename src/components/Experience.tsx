import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: "LRN Technologies and Content Solutions",
      role: "Full Stack Developer",
      duration: "1 year 5 months",
      description:
        "Key contributor to the Mobile Manager application and internal automation tools.",
      achievements: [
        "Worked on Mobile Manager (Admin side) using AngularJS and NodeJS.",
        "Managed data using PostgreSQL and MongoDB databases.",
        "Created 2 critical automations: Jenkins Automation and Google Firebase Automation.",
        "Successfully executed Angular Migration from version 7 to version 19 within the timeline.",
        "Achieved 100% code coverage for the whole project including frontend and backend.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 border-l-4 border-l-primary relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-primary" />
                      {exp.role}
                    </h3>
                    <p className="text-xl text-muted-foreground mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium bg-secondary px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>

                <p className="mb-6 text-muted-foreground">{exp.description}</p>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
