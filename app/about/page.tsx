'use client'
import { motion } from 'motion/react'
import { EDUCATION } from '../data'

const PROFILE_IMAGE = '/profile.jpg' // Place your image in public/ or use a placeholder

export default function AboutPage() {
  return (
    <motion.main 
      className="max-w-5xl mx-auto py-12 flex flex-col md:flex-row gap-8 items-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Profile Image Left */}
      <div className="flex-shrink-0 w-full md:w-[380px] flex justify-center md:justify-start">
        <div className="w-full max-w-[340px] aspect-[3/4] rounded-2xl bg-zinc-200 dark:bg-zinc-700 overflow-hidden shadow-xl">
          {/* Use your real photo if available */}
          <img src={PROFILE_IMAGE} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Info Cards Right */}
      <div className="flex-1 flex flex-col gap-8 w-full">
        {/* About Me Card */}
        <div className="rounded-2xl shadow-xl bg-zinc-100 dark:bg-zinc-800/80 p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Hi, my name is Cristian Salitre, I am currently working as a Software Engineer Intern at Honeywell. Working on projects that involve computer vision, AI, and firmware development.
          </p>
        </div>
        {/* Education Card */}
        <div className="rounded-2xl shadow-xl bg-zinc-100 dark:bg-zinc-800/80 p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="py-2 pr-4 font-semibold">School</th>
                  <th className="py-2 pr-4 font-semibold">Degree</th>
                  <th className="py-2 pr-4 font-semibold">Specialization</th>
                </tr>
              </thead>
              <tbody>
                {EDUCATION.map((edu) => (
                  <tr key={edu.id} className="align-top">
                    <td className="py-2 pr-4 flex items-center gap-2">
                      {/* School logo if available */}
                      {edu.institution.includes('Charlotte') && (
                        <img src="/UNC-Charlotte-Official.png" alt="UNC Charlotte" className="w-8 h-8 rounded" />
                      )}
                      {edu.institution.includes('State') && (
                        <img src="/NCSU_Official.png" alt="NCSU" className="w-8 h-8 rounded" />
                      )}
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">{edu.institution}</span>
                    </td>
                    <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">{edu.degree}</td>
                    <td className="py-2 pr-4 text-zinc-500 dark:text-zinc-400">{edu.specialty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.main>
  )
} 