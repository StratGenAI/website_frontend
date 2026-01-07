'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Globe, Server, GitBranch, Package, Zap, Layers } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function TechnologiesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const frontendTech = [
    { name: 'React', icon: Code2, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50', description: 'Modern UI library for building interactive interfaces' },
    { name: 'Next.js', icon: Globe, color: 'from-gray-800 to-gray-900', bgColor: 'bg-gray-50', description: 'React framework for production-ready applications' },
    { name: 'TypeScript', icon: Code2, color: 'from-blue-600 to-indigo-600', bgColor: 'bg-indigo-50', description: 'Type-safe JavaScript for scalable applications' },
    { name: 'Tailwind CSS', icon: Layers, color: 'from-cyan-500 to-teal-500', bgColor: 'bg-cyan-50', description: 'Utility-first CSS framework for rapid UI development' },
  ]

  const backendTech = [
    { name: 'Python', icon: Code2, color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-50', description: 'Versatile language for AI, ML, and backend development' },
    { name: 'Node.js', icon: Server, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50', description: 'JavaScript runtime for scalable server applications' },
    { name: 'FastAPI', icon: Zap, color: 'from-teal-500 to-cyan-500', bgColor: 'bg-teal-50', description: 'High-performance API framework for Python' },
    { name: 'REST APIs', icon: Globe, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50', description: 'RESTful API design and microservices architecture' },
  ]

  const databaseTech = [
    { name: 'PostgreSQL', icon: Database, color: 'from-blue-600 to-indigo-600', bgColor: 'bg-blue-50', description: 'Advanced open-source relational database' },
    { name: 'MySQL', icon: Database, color: 'from-orange-500 to-amber-500', bgColor: 'bg-orange-50', description: 'Reliable relational database management system' },
    { name: 'MongoDB', icon: Database, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50', description: 'NoSQL database for flexible data storage' },
    { name: 'Supabase', icon: Database, color: 'from-green-600 to-emerald-600', bgColor: 'bg-green-50', description: 'Open-source Firebase alternative with PostgreSQL' },
    { name: 'Vector DBs', icon: Database, color: 'from-purple-500 to-violet-500', bgColor: 'bg-purple-50', description: 'Pinecone, Weaviate for AI embeddings storage' },
  ]

  const cloudTech = [
    { name: 'AWS', icon: Cloud, color: 'from-orange-500 to-amber-500', bgColor: 'bg-orange-50', description: 'Amazon Web Services cloud infrastructure' },
    { name: 'Azure', icon: Cloud, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50', description: 'Microsoft Azure cloud platform' },
    { name: 'GCP', icon: Cloud, color: 'from-blue-600 to-indigo-600', bgColor: 'bg-indigo-50', description: 'Google Cloud Platform services' },
    { name: 'Docker', icon: Package, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50', description: 'Containerization for consistent deployments' },
  ]

  const devTools = [
    { name: 'Git', icon: GitBranch, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-50', description: 'Version control and collaboration' },
    { name: 'CI/CD', icon: Zap, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50', description: 'Automated testing and deployment pipelines' },
  ]

  const TechSection = ({ title, subtitle, techs, delay }: { title: string, subtitle: string, techs: typeof frontendTech, delay: number }) => (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="mb-16 md:mb-20 lg:mb-24"
    >
      <div className="mb-8 md:mb-10 lg:mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
          className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 px-4"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-50"></div>
            <div className="relative w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading">{title}</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 ml-6 md:ml-8 font-heading px-4"
        >
          {subtitle}
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {techs.map((tech, index) => {
          const IconComponent = tech.icon
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: delay + 0.6 + index * 0.1 }}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              <div className={`relative ${tech.bgColor} rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm overflow-hidden`}>
                <motion.div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10 mb-4 md:mb-6">
                  <motion.div
                    className={`inline-flex p-4 md:p-5 rounded-xl md:rounded-2xl bg-gradient-to-br ${tech.color} shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {tech.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tech.color} opacity-5 rounded-bl-full`} />
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20 relative overflow-hidden">
      <motion.div
        className="absolute top-20 right-5 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-5 md:left-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 md:mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30"></div>
              <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-heading px-4">
                Technologies
              </h1>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-heading leading-relaxed px-4"
          >
            Modern tech stack powering innovative AI solutions
          </motion.p>
        </motion.div>

        <TechSection title="Frontend" subtitle="Modern web technologies for exceptional user experiences" techs={frontendTech} delay={0.3} />
        <TechSection title="Backend" subtitle="Robust server-side technologies and APIs" techs={backendTech} delay={0.5} />
        <TechSection title="Databases" subtitle="Reliable data storage and management solutions" techs={databaseTech} delay={0.7} />
        <TechSection title="Cloud & Infrastructure" subtitle="Scalable cloud platforms and deployment solutions" techs={cloudTech} delay={0.9} />
        <TechSection title="DevOps & Tools" subtitle="Tools and practices for efficient development workflows" techs={devTools} delay={1.1} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-12 md:mt-16 lg:mt-24"
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl md:rounded-3xl mx-4 md:mx-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% auto' }}
            />
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-heading"
              >
                Ready to Build with Modern Tech?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.7 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-10 max-w-2xl mx-auto font-heading px-4"
              >
                Let's discuss how our technology expertise can power your next project
              </motion.p>
              <motion.a
                href="/contact"
                className="inline-block px-8 md:px-10 py-4 md:py-5 bg-white text-gray-900 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all font-heading text-base md:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

