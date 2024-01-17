"use client";

import FunctionalNavbar from "./functionalNavbar";

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 py-6 justify-center bg-[#161A30]">
      <div className="flex justify-start ml-48 font-semibold text-white">
        <h1>Nabil Saragih</h1>
      </div>
      <div className="flex justify-end mr-48 font-semibold text-white">
        <FunctionalNavbar id="hero" title="About" className="mr-5" />
        <FunctionalNavbar id="exp" title="Experiences" className="mr-5" />
        <FunctionalNavbar id="projects" title="Projects" className="mr-5" />
        <FunctionalNavbar id="/blogs" title="Blogs" className="mr-0" />
      </div>
    </div>
  );
};

export default Navbar;
