import { motion } from 'motion/react'

export default function ExperienceList() {
  const experiences = [
    {
      id: 'honeywell-ft',
      name: 'Honeywell',
      logo: '/honeywell-logo.png',
      role: 'Advanced Application Engineer',
      period: 'September 2025 — Present',
    },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
      <div className="rounded-xl shadow-md bg-zinc-50/80 dark:bg-zinc-900/70 border border-zinc-200/60 dark:border-zinc-800 p-5 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Current Role</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-base">
            <thead>
              <tr>
                <th className="py-2 pr-4 font-semibold">Company</th>
                <th className="py-2 pr-4 font-semibold">Role</th>
                <th className="py-2 pr-4 font-semibold">Period</th>
              </tr>
            </thead>
            <tbody>
              {experiences.map((exp) => (
                <tr key={exp.id} className="align-top hover:bg-zinc-100/70 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                  <td className="py-3 pr-4 flex items-center">
                    <img src={exp.logo} alt={`${exp.name} logo`} className="w-12 h-12 object-contain" />
                  </td>
                  <td className="py-3 pr-4 text-zinc-700 dark:text-zinc-300">{exp.role}</td>
                  <td className="py-3 pr-4 text-zinc-500 dark:text-zinc-400">{exp.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
}
