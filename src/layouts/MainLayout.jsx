import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = () => {
  
  return (
    <div className="bg-[#08090a]">
      <main className="min-h-screen max-w-3xl mx-auto py-12 sm:py-24 px-6 font-Inter overflow-clip">
        <div className="min-h-[calc(100vh-200px)]">
          <Outlet></Outlet>
        </div>
        <Navbar></Navbar>
        <Footer></Footer>
        <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-950 to-transparent"></div>
      </main>
    </div>
  );
};

export default MainLayout;
