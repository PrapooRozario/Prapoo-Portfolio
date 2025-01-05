import { GraduationCap, School, University } from "lucide-react";
import { motion } from "framer-motion";

const Educations = () => {
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
          My Education
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
          My Learning Journey
        </h1>
        <p className="text-[#a3a3a3] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          A brief overview of my academic journey.
        </p>
      </div>
      <div className="mt-12 w-fit mx-auto">
        <div className="relative">
          <div className="flex gap-6">
            <div className="rounded-full bg-white/20 border p-4 flex justify-center items-center border-neutral-200 w-fit h-fit">
              <School />
            </div>

            <div className="bg-neutral-800 w-[1px] md:h-[115px] absolute left-[28px] md:top-[58px] sm:h-[115px] sm:top-[58px] h-[151px] top-[58px]"></div>

            <div>
              <h1
                onClick={() =>
                  (window.location.href =
                    "https://www.facebook.com/p/Bashundhara-Public-School-and-College-100063975126018/?locale=bn_IN")
                }
                className="font-semibold leading-none cursor-pointer"
              >
                Bashundhara Public School and College
              </h1>
              <small className="text-[#a3a3a3]">Dhaka, Bangladesh</small>
              <p className="text-[#a3a3a3] text-sm mt-1">
                I have been studying at Bashundhara Public School and College
                for 7 years. Currently, I'm in class 9, focusing on secondary
                education as a middle-bencher student.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-fit rounded-lg text-black bg-white hover:bg-white/80 transition duration-300 cursor-pointer px-3 py-1 mb-3 text-xs mt-3 font-medium whitespace-nowrap">
                  High School
                </div>
                <div className="w-fit rounded-lg text-black bg-white hover:bg-white/80 transition duration-300 cursor-pointer px-3 py-1 mb-3 text-xs mt-3 font-medium whitespace-nowrap">
                  Currently Studying
                </div>
              </div>
              <div className="absolute left-7 md:top-[140px] border-t border-dashed border-neutral-800 w-full"></div>
            </div>
          </div>

          <div className="flex gap-6 mt-10">
            <div className="rounded-full bg-white/20 border p-4 flex justify-center items-center border-neutral-800 w-fit h-fit">
              <University></University>
            </div>
            <div className="bg-neutral-800 w-[1px] md:h-[115px] absolute left-[28px] md:top-[229px] h-[170px] top-[266px] sm:h-[114px] sm:top-[230px]"></div>
            <div>
              <div className="blur-[6px]">
                <h1 className="font-semibold leading-none">
                  Unknown Unknown Unknown Unknown
                </h1>
                <small className="text-[#a3a3a3]">Unknown, Unknown</small>
                <p className="text-[#a3a3a3] text-sm mt-1">
                  Unknown Unknown Unknown Unknown Unknown Unknown Unknown
                  Unknown Unknown Unknown Unknown
                </p>
              </div>
              <div className="w-fit rounded-lg text-black bg-white hover:bg-white/80 transition duration-300 cursor-pointer px-3 py-1 mb-3 text-xs mt-3 font-medium whitespace-nowrap">
                College
              </div>
              <div className="absolute left-7 md:top-[312px] border-t border-dashed border-neutral-800 w-full"></div>
            </div>
          </div>

          <div className="flex gap-6 mt-10">
            <div className="rounded-full bg-white/20 border p-4 flex justify-center items-center border-neutral-800 w-fit h-fit">
              <GraduationCap />
            </div>
            <div>
              <div className="blur-[6px]">
                <h1 className="font-semibold leading-none">
                  Unknown Unknown Unknown Unknown
                </h1>
                <small className="text-[#a3a3a3]">Unknown, Unknown</small>
                <p className="text-[#a3a3a3] text-sm mt-1">
                  Unknown Unknown Unknown Unknown Unknown Unknown Unknown
                  Unknown Unknown Unknown Unknown
                </p>
              </div>

              <div className="w-fit rounded-lg text-black bg-white hover:bg-white/80 transition duration-300 cursor-pointer px-3 py-1 mb-3 text-xs mt-3 font-medium whitespace-nowrap">
                University
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Educations;
