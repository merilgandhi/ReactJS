import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-center items-center py-8"
    >
      <div className="relative w-16 h-16">
        <motion.div
          className="absolute w-16 h-16 border-4 border-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-16 h-16 border-4 border-transparent border-t-blue-300 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}