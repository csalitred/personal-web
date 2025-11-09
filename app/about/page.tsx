'use client'
import { motion } from 'motion/react'
import { EDUCATION } from '../data'
import ExperienceList from '../../components/ui/experience'

const PROFILE_IMAGE = '/profile.png'

export default function AboutPage() {
  return (
    <motion.main
      className="relative flex flex-col md:flex-row items-center md:items-start justify-center min-h-screen pt-20 pb-16 px-4 gap-12 overflow-x-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle background gradient blob */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-400/20 via-green-300/20 to-purple-400/20 blur-3xl opacity-60" />
      </div>
      {/* Profile Image Left */}
      <div className="flex-shrink-0 w-full md:w-[340px] flex justify-center md:justify-start mb-8 md:mb-0">
        <div className="w-48 h-64 md:w-72 md:h-96 rounded-3xl bg-zinc-200 dark:bg-zinc-700 overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900">
          <img src={PROFILE_IMAGE} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Info Section Right */}
      <div className="flex-1 flex flex-col gap-12 w-full max-w-2xl">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-zinc-900 dark:text-zinc-100">About Me</h1>
          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Hi, I'm Cristian Salitre, a Software Engineer at Honeywell, specializing in computer vision, AI, and firmware development. I have experience with embedded systems, real-time image processing, and integrating AI models on edge devices such as Jetson platforms. Passionate about applying emerging technologies to practical challenges, I continuously explore new tools and methods to deliver innovative solutions.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">Education</h2>
          <div className="overflow-x-auto rounded-xl shadow-lg bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md p-4">
            <table className="min-w-full text-left text-base">
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
        <div>
          <ExperienceList />
        </div>
      </div>
    </motion.main>
  )
} 