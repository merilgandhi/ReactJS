import { motion } from 'framer-motion';

export default function ErrorMessage({ message, onDismiss }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 relative"
    >
      <span className="block sm:inline">{message}</span>
      <button
        onClick={onDismiss}
        className="absolute top-3 right-3 text-red-700 hover:text-red-900"
      >
        ✕
      </button>
    </motion.div>
  );
}