import { FaReact } from "react-icons/fa";
import { motion } from "motion/react";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const Skills = () => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", y: 5 }}
      animate={{ filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut", 
      }} className="max-w-3xl mx-auto px-6 pb-16 text-white">
      <h1 className="text-xl font-bold">Skills</h1>
      <div className="mt-4 flex flex-wrap gap-4">
        <motion.button
          onClick={() =>
            (window.location.href =
              "https://en.wikipedia.org/wiki/React_(software)")
          }
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-[#0f0f0f] p-3 rounded-2xl *:hover:text-[#087EA4] transition-colors duration-300 ease-in-out"
        >
          <FaReact className="text-white/80 text-2xl" />
        </motion.button>
        <motion.button
          onClick={() =>
            (window.location.href = "https://en.wikipedia.org/wiki/Node.js")
          }
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-[#0f0f0f] p-3 rounded-2xl *:hover:text-[#417E38] transition-colors duration-300 ease-in-out"
        >
          <FaNodeJs className="text-white/80 text-2xl" />
        </motion.button>
        <motion.button
          onClick={() =>
            (window.location.href = "https://en.wikipedia.org/wiki/JavaScript")
          }
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-[#0f0f0f] p-3 rounded-2xl *:hover:text-[#E8D44D] transition-colors duration-300 ease-in-out"
        >
          <IoLogoJavascript className="text-white/80 text-2xl" />
        </motion.button>
        <motion.button
          onClick={() =>
            (window.location.href = "https://en.wikipedia.org/wiki/Express.js")
          }
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-[#0f0f0f] p-3 rounded-2xl *:hover:text-[#444444] transition-colors duration-300 ease-in-out"
        >
          <SiExpress className="text-white/80 text-2xl" />
        </motion.button>
        <motion.button
          onClick={() =>
            (window.location.href =
              "https://en.wikipedia.org/wiki/Tailwind_CSS")
          }
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-[#0f0f0f] p-3 rounded-2xl *:hover:text-[#38BDF8] transition-colors duration-300 ease-in-out"
        >
          <RiTailwindCssFill className="text-white/80 text-2xl" />
        </motion.button>
        <motion.button
          onClick={() =>
            (window.location.href = "https://en.wikipedia.org/wiki/HTML")
          }
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-[#0f0f0f] p-3 rounded-2xl *:hover:text-[#DE4B28] transition-colors duration-300 ease-in-out"
        >
          <FaHtml5 className="text-white/80 text-2xl" />
        </motion.button>
        <motion.button
          onClick={() =>
            (window.location.href = "https://en.wikipedia.org/wiki/CSS")
          }
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="bg-[#0f0f0f] p-3 rounded-2xl *:hover:text-[#146EB0] transition-colors duration-300 ease-in-out"
        >
          <FaCss3Alt className="text-white/80 text-2xl" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Skills;
