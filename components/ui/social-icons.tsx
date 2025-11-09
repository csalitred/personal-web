import { motion } from 'motion/react'

export default function SocialIcons() {
  return (
    <motion.div
      className="flex items-center justify-center gap-4 mb-6"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.4 }}
    >
      {/* GitHub */}
      <motion.a
        href="https://github.com/csalitred"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
      >
        <svg className="w-8 h-8 text-zinc-900 dark:text-zinc-100" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 0.2975C5.37 0.2975 0 5.6675 0 12.2975C0 17.6075 3.438 22.0975 8.205 23.6975C8.805 23.7975 9.025 23.4475 9.025 23.1375C9.025 22.8575 9.015 22.1575 9.01 21.2075C5.6725 21.8975 4.9675 19.5975 4.9675 19.5975C4.4225 18.1975 3.6325 17.7975 3.6325 17.7975C2.545 17.0475 3.7175 17.0625 3.7175 17.0625C4.9225 17.1525 5.555 18.3075 5.555 18.3075C6.63 20.1975 8.4125 19.6575 9.0875 19.3475C9.1875 18.5675 9.4975 18.0175 9.8475 17.7075C7.155 17.3975 4.34499 16.3375 4.34499 11.6575C4.34499 10.3275 4.80999 9.2375 5.57999 8.3875C5.45999 8.0775 5.05999 6.8275 5.68999 5.1275C5.68999 5.1275 6.69999 4.7875 8.99999 6.3775C9.95999 6.1075 10.97999 5.9775 11.99999 5.9725C13.01999 5.9775 14.03999 6.1075 14.99999 6.3775C17.29999 4.7875 18.30999 5.1275 18.30999 5.1275C18.93999 6.8275 18.53999 8.0775 18.41999 8.3875C19.18999 9.2375 19.65499 10.3275 19.65499 11.6575C19.65499 16.3475 16.83999 17.3925 14.13999 17.6925C14.57999 18.0625 14.96999 18.8225 14.96999 19.9375C14.96999 21.5975 14.95999 22.8875 14.95999 23.1375C14.95999 23.4475 15.17999 23.8025 15.78999 23.6925C20.55999 22.0925 24 17.6025 24 12.2975C24 5.6675 18.63 0.2975 12 0.2975Z" />
        </svg>
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/cristian-salitre"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
      >
        <svg className="w-8 h-8 text-blue-700 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M20.447 20.452H17.24v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.039V9h3.053v1.561h.043c.426-.807 1.466-1.657 3.018-1.657 3.228 0 3.823 2.124 3.823 4.887v6.661zM5.337 7.433c-.979 0-1.771-.793-1.771-1.771 0-.979.792-1.771 1.771-1.771.98 0 1.771.792 1.771 1.771 0 .978-.792 1.771-1.771 1.771zM6.813 20.452H3.86V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.207 24 24 23.226 24 22.271V1.729C24 .774 23.207 0 22.225 0z"/>
        </svg>
      </motion.a>
    </motion.div>
  )
}
