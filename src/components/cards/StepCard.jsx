import { motion } from "framer-motion";

export const StepCard = ({ number, content, icon, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, delay: number * 0.1 }}
    whileHover={{
      y: -5,
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
      transition: { duration: 0.2 },
    }}
    className={`
  bg-white px-4 py-2 md:px-5 md:py-3 rounded-xl shadow-md transition-shadow duration-300 cursor-default
  ${className}
`}
  >
    <div className="flex items-start space-x-2">
      <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center">
        {icon ? icon : number + 1}
      </span>
      <p className="text-base text-[var(--text-dark)] leading-relaxed">
        {content}
      </p>
    </div>
  </motion.div>
);
