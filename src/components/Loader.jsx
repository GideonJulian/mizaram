import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Pulsing circle */}
        <motion.div
          className="w-16 h-16 rounded-full bg-[#556b2f] shadow-lg"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />

        {/* Loading text */}
        <motion.p
          className="text-xl md:text-2xl font-semibold text-[#556b2f]"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          Loading product...
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Loading;
