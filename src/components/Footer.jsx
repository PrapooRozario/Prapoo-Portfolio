import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 text-white">
      <div className="mt-3 text-center">
        <p className="text-[#828282]">Thank you for visiting!</p>
        <p className="text-[#828282]">
          © {new Date().getFullYear()} <Link to="/">Prapoo Rozario.</Link> All
          Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
