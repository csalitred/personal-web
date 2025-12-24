'use client'
import { motion } from 'motion/react'
import { EDUCATION } from '../data'
import ExperienceList from '../../components/ui/experience'

const PROFILE_IMAGE = '/profile.png'

export default function AboutPage() {
  return (
    <motion.main
      className="relative flex flex-col items-center md:items-start justify-center min-h-screen pt-5 pb-32 px-4 gap-5 overflow-x-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle background gradient blob */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-400/20 via-green-300/20 to-purple-400/20 blur-3xl opacity-60" />
      </div>
      <div className="w-full text-left mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">About Me</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-15">
        {/* Profile Image Left - Sticky and Larger */}
        <div className="flex-shrink-0 w-full md:w-[560px] flex justify-center md:justify-start mb-8 md:mb-0 md:sticky md:top-8 md:h-screen md:items-start">
          <div className="w-72 h-[420px] md:w-[440px] md:h-[620px] rounded-3xl bg-zinc-200 dark:bg-zinc-700 overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900">
            <img src={PROFILE_IMAGE} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Info Section Right */}
        <div className="flex-1 flex flex-col gap-15 w-full max-w-xl">
          <div className="rounded-xl shadow-md bg-zinc-50/80 dark:bg-zinc-900/70 border border-zinc-200/60 dark:border-zinc-800 p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">About Me</h3>
            </div>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Hi my name is Cristian Salitre, I am currently an Advanced Application Engineer at Honeywell. My expertise lies in embedded systems and firmware development. 
              Although I have worked on computer vision and machine learning projects in the past, and continue to do so in my career. With a backround in computer and electrical engineering, I strive to bridge the 
              gap between hardware and software to create efificient and innovative solutions.
            </p>
          </div>
          <div>
            <ExperienceList />
          </div>
          <div>
            <div className="rounded-xl shadow-md bg-zinc-50/80 dark:bg-zinc-900/70 border border-zinc-200/60 dark:border-zinc-800 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Education</h3>
              </div>
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
        </div>
      </div>
    </motion.main>
  )
} 