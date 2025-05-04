import { ChevronRight } from "lucide-react";
import Prapoo from "../assets/Prapoo.jpg";
import { motion } from "framer-motion";
import { RainbowButton } from "./ui/rainbow-button";
const Header = () => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", y: 5 }}
      animate={{ filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="text-white max-w-3xl mx-auto"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hi, I'm Prapoo 👋
          </h1>
          <p className="inline-block lg:w-[480px] md:w-[500px] md:text-xl mt-4">
            Professional MERN Stack Developer. Passionate About Code and
            Creating Scalable Web Applications.
          </p>
          <div className="group">
            <a href="https://drive.google.com/file/d/1Acg_JD3IZy_BjIkzGsfVeZIbdMjTx-Hn/view?usp=sharing">
              <RainbowButton
                type="submit"
                className="rounded-lg flex items-center justify-center mx-auto md:mx-0 gap-2 bg-white/5 py-3 px-5 text-sm mt-4"
              >
                Download Resume
                <ChevronRight className="w-5 transition-transform duration-300 transform group-hover:translate-x-1" />
              </RainbowButton>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src={Prapoo}
            className="h-36 w-36 sm:h-48 sm:w-48 md:h-48 md:w-48 xl:h-36 xl:w-36 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
