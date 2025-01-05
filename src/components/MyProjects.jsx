import { Globe } from "lucide-react";
import Project1 from "../assets/p1.png";
import Project2 from "../assets/p2.png";
import Project3 from "../assets/p3.png";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

const MyProjects = () => {
  const number = [
    "Html",
    "Javascript",
    "Css",
    "React",
    "Node.js",
    "Express.js",
  ];
  return (
    <motion.div
      initial={{ filter: "blur(10px)", y: 5 }}
      animate={{ filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="max-w-3xl mx-auto px-6 pb-16 text-white"
    >
      <div className="text-center">
        <div className="w-fit mx-auto rounded-lg text-black bg-white px-3 py-1 mb-3 text-sm">
          My Projects
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
          Check out my latest work
        </h1>
        <p className="text-[#a3a3a3] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div>
          <div className="relative flex flex-col border border-neutral-900 rounded-lg">
            <div
              onClick={() =>
                (window.location.href = "https://mycareer-ba6ef.web.app/")
              }
              className="relative h-48 overflow-hidden text-white rounded-t-md cursor-pointer"
            >
              <img
                src={Project1}
                alt="Project1"
                className="object-fit h-full w-full"
              />
            </div>
            <div className="mx-3">
              <h1 className="font-semibold mt-1 text-lg text-[#ebebeb]">
                My Career
              </h1>
              <p className="text-xs mt-1 text-[#ebebeb]">Nov 2024 - Nov 2024</p>
              <p className="text-xs text-[#8e8e8e] mt-2 min-h-20 line-clamp-5">
                MyCareer, a comprehensive career counseling website designed to
                provide personalized career advice and resources. Whether you're
                a fresh graduate, looking for a career change, or seeking
                professional development, MyCareer is here to guide you in
                making informed decisions about your professional future.
              </p>
              <div className="mt-2 flex flex-wrap gap-[5px]">
                {number.map((x) => (
                  <div
                    key={x}
                    className="text-[11px] bg-[#202020] hover:bg-[#181818] transition duration-300 w-fit py-1 px-2 rounded-lg"
                  >
                    {x}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() =>
                    (window.location.href = "https://mycareer-ba6ef.web.app/")
                  }
                  className="text-[10px] font-medium mb-3 bg-white text-black hover:bg-white/80 transition duration-300  w-fit py-[1px] px-3 rounded-md flex items-center gap-2 mt-2"
                >
                  <Globe className="w-3"></Globe> Website
                </button>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/programming-hero-web-course1/b10-a9-authentication-PrapooRozario")
                  }
                  className="text-[10px] font-medium mb-3 bg-white text-black hover:bg-white/80 transition duration-300  w-fit py-[1px] px-3 rounded-md flex items-center gap-2 mt-2"
                >
                  <FaGithub className="w-3 text-2xl" /> Source
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative flex flex-col border border-neutral-900 rounded-lg">
            <div
              onClick={() =>
                (window.location.href =
                  "https://ph10a7-bpl-dream-11.netlify.app/")
              }
              className="relative h-48 overflow-hidden text-white rounded-t-md cursor-pointer"
            >
              <img
                src={Project2}
                alt="Project2"
                className="object-fit h-full w-full"
              />
            </div>
            <div className="mx-3">
              <h1 className="font-semibold mt-1 text-lg text-[#ebebeb]">
                Bpl Dream 11
              </h1>
              <p className="text-xs mt-1 text-[#ebebeb]">Oct 2024 - Oct 2024</p>
              <p className="text-xs text-[#8e8e8e] mt-2 min-h-20 line-clamp-5">
                Bpl Dream 11 is a dynamic web application that allows users to
                select and manage their favorite cricket players for a virtual
                team. Designed with an intuitive user interface, this
                application makes it easy for cricket enthusiasts to build their
                dream team while keeping track of their coin balance and player
                selections.
              </p>
              <div className="mt-2 flex flex-wrap gap-[5px]">
                {number.map((x) => (
                  <div
                    key={x}
                    className="text-[11px] bg-[#202020] hover:bg-[#181818] transition duration-300 w-fit py-1 px-2 rounded-lg"
                  >
                    {x}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://ph10a7-bpl-dream-11.netlify.app/")
                  }
                  className="text-[10px] font-medium mb-3 bg-white text-black hover:bg-white/80 transition duration-300  w-fit py-[1px] px-3 rounded-md flex items-center gap-2 mt-2"
                >
                  <Globe className="w-3"></Globe> Website
                </button>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/programming-hero-web-course1/b10a7-dream-11-PrapooRozario")
                  }
                  className="text-[10px] font-medium mb-3 bg-white text-black hover:bg-white/80 transition duration-300  w-fit py-[1px] px-3 rounded-md flex items-center gap-2 mt-2"
                >
                  <FaGithub className="w-3 text-2xl" /> Source
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative flex flex-col border border-neutral-900 rounded-lg">
            <div
              onClick={() =>
                (window.location.href = "https://granny-a8a46.web.app/")
              }
              className="relative h-48 overflow-hidden text-white rounded-t-md cursor-pointer"
            >
              <img
                src={Project3}
                alt="Project3"
                className="object-fit h-full w-full"
              />
            </div>
            <div className="mx-3">
              <h1 className="font-semibold mt-1 text-lg text-[#ebebeb]">
                Granny
              </h1>
              <p className="text-xs mt-1 text-[#ebebeb]">Dec 2024 - Dec 2024</p>
              <p className="text-xs text-[#8e8e8e] mt-2 min-h-20 line-clamp-5">
                Granny is a full-stack restaurant management platform designed
                to streamline both customer interactions and internal management
                processes. This website aims to offer a seamless
                experience for customers to browse menus, place orders, and for
                staff to manage reservations, orders, and inventory effectively.
              </p>
              <div className="mt-2 flex flex-wrap gap-[5px]">
                {number.map((x) => (
                  <div
                    key={x}
                    className="text-[11px] bg-[#202020] hover:bg-[#181818] transition duration-300 w-fit py-1 px-2 rounded-lg"
                  >
                    {x}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() =>
                    (window.location.href = "https://granny-a8a46.web.app/")
                  }
                  className="text-[10px] font-medium mb-3 bg-white text-black hover:bg-white/80 transition duration-300  w-fit py-[1px] px-3 rounded-md flex items-center gap-2 mt-2"
                >
                  <Globe className="w-3"></Globe> Website
                </button>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/programming-hero-web-course2/b10a11-client-side-PrapooRozario")
                  }
                  className="text-[10px] font-medium mb-3 bg-white text-black hover:bg-white/80 transition duration-300  w-fit py-[1px] px-3 rounded-md flex items-center gap-2 mt-2"
                >
                  <FaGithub className="w-3 text-2xl" /> Source
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MyProjects;
