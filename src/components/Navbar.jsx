import { BookTextIcon, Home } from "lucide-react";
import { Dock, DockIcon } from "./ui/dock";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <Dock
        direction="middle"
        className="border-neutral-900 bg-[#0f0f0f] fixed bottom-4 z-10"
      >
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to='/' className="hover:bg-neutral-900 transition rounded-full p-3">
                  <Home className="text-white/80"></Home>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to='/Blogs' className="hover:bg-neutral-900 transition rounded-full p-3">
                  <BookTextIcon className="text-white/80"></BookTextIcon>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Blog</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>
        <div className="w-[1px] h-[35px] bg-neutral-800"></div>
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="hover:bg-neutral-900 transition rounded-full p-4">
                  <a href="https://github.com/PrapooRozario">
                    <FaGithub className="text-white/80 text-lg"></FaGithub>
                  </a>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Github</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="hover:bg-neutral-900 transition rounded-full p-4">
                  <a href="https://www.linkedin.com/in/albart-rozario-825259290">
                    <FaLinkedin className="text-white/80 text-lg"></FaLinkedin>
                  </a>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>
        <DockIcon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="hover:bg-neutral-900 transition rounded-full p-4">
                  <a href="https://www.facebook.com/profile.php?id=100081222159432">
                    <FaFacebook className="text-white/80 text-lg"></FaFacebook>
                  </a>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Facebook</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DockIcon>
      </Dock>
    </div>
  );
};

export default Navbar;
