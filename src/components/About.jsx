import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", y: 5 }}
      animate={{ filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="max-w-3xl mx-auto px-6 py-16 text-white"
    >
      <h1 className="text-xl font-bold">About</h1>
      <p className="text-[#8e8e8e] text-sm leading-relaxed font-medium text-left text-pretty mt-2">
        In 2023,{" "}
        <a
          href="https://en.wikipedia.org/wiki/Freelancer"
          className="text-white underline"
        >
          at the age of 14, I started freelancing and worked on AI voice-over
          projects on Fiverr and Upwork.
        </a>{" "}
        My strong interest in programming led me to start learning HTML and CSS
        on YouTube. I was really excited to learn how websites work and how to
        create them. After gaining some basic skills, I wanted to learn more and
        dive deeper into programming. In 2024,{" "}
        <a
          href="https://www.programming-hero.com/"
          className="text-white underline"
        >
          I joined Programming Hero Batch 10 to learn MERN stack technologies.
        </a>{" "}
        This helped me improve my coding skills and explore the world of web
        development.
      </p>
    </motion.div>
  );
};

export default About;
