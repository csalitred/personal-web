import { motion } from 'motion/react'

export default function ExperienceList() {
  const experiences = [
    {
      id: 'honeywell-ft',
      name: 'Honeywell',
      logo: '/honeywell-logo.png',
      role: 'Software Engineer',
      period: 'September 2025 — Present',
      description:
        'Firmware-based application development focusing on customer facing solutions.',
    },
    {
      id: 'honeywell-intern',
      name: 'Honeywell',
      logo: '/honeywell-logo.png',
      role: 'Software Engineer Intern',
      period: 'June — August 2025',
      description: 'Summer internship focused on firmware and computer vision.',
    },
    {
      id: 'oxit',
      name: 'Oxit',
      logo: '/oxit-logo.png',
      role: 'Embedded Engineer Intern',
      period: 'March — June 2025',
      description: 'Improve documentation, develop customer example code and assist in hardware verification processes.',
    },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
      <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">Experience</h2>

      <div className="overflow-x-auto rounded-xl shadow-lg bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md p-4">
        <table className="min-w-full text-left text-base">
          <thead>
            <tr>
              <th className="py-2 pr-4 font-semibold">Company</th>
              <th className="py-2 pr-4 font-semibold">Role</th>
              <th className="py-2 pr-4 font-semibold">Period</th>
              <th className="py-2 pr-4 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((exp) => (
              <tr key={exp.id} className="align-top">
                  <td className="py-2 pr-4 flex items-center">
                    <img src={exp.logo} alt={`${exp.name} logo`} className="w-8 h-8 object-contain" />
                  </td>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">{exp.role}</td>
                <td className="py-2 pr-4 text-zinc-500 dark:text-zinc-400">{exp.period}</td>
                <td className="py-2 pr-4 text-zinc-500 dark:text-zinc-400">{exp.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
