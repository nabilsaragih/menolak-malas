import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./components/Navbar/navbar";
import ShowProject from "./components/Home/showProject";
import Footer from "./components/Home/footerItems";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <section id="navbar">
        <Navbar />
      </section>

      {/* Hero - About */}
      <section id="hero">
        <div className="grid grid-cols-1 justify-start h-full py-48 px-48 bg-[#161A30] text-white">
          <h1 className="font-bold">Hello, I'm</h1>
          <h1 className="font-bold text-4xl">Nabil Saragih</h1>
          <h1 className="font-bold mb-5">Undergraduate Student at Mulawarman University</h1>
          <h1 className="grid grid-cols-2 mb-5">As a college student at Mulawarman University majoring in Informatics, I have interests in several fields, including Artificial Intelligence and Robotics.</h1>

          <div>
            <h1 className="font-bold">You can connect with me</h1>
            <h1>I'm available on social media below, feel free to contact me at</h1>
            <div className="flex justify-start text-2xl mt-5 mb-14">
              <div className="border-white border rounded-xl mr-3 flex items-center bg-[#161A30] hover:bg-white hover:text-black">
                <Link href="https://github.com/nabilsaragih" target="_blank" className="px-2 py-0.5">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
              <div className="border-white border rounded-xl mr-3 flex items-center bg-[#161A30] hover:bg-white hover:text-black">
                <Link href="https://www.linkedin.com/in/nabilsaragih/" target="_blank" className="px-2 py-0.5">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
              <div className="border-white border rounded-xl mr-3 flex items-center bg-[#161A30] hover:bg-white hover:text-black">
                <Link href="https://www.instagram.com/nabilsaragih._/" target="_blank" className="px-2 py-0.5">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
              <div className="border-white border rounded-xl mr-3 flex items-center bg-[#161A30] hover:bg-white hover:text-black">
                <Link href="https://discord.com/users/474779249186832385" target="_blank" className="px-1 py-0.5">
                  <FontAwesomeIcon icon={faDiscord} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="exp">
        <div className="h-full px-48 py-10 bg-[#F0ECE5]">
          <div className="pb-10 text-5xl font-black">
            <h1>Experiences</h1>
          </div>
          <div className="grid grid-cols-2">
            {/* Exp 1 */}
            <div className="border border-slate-400 rounded mr-5 shadow-xl h-full">
              {/* Header 1 */}
              <div className="pb-4 mx-5 mt-5 flex flex-row items-center border border-b-slate-300">
                <div className="pr-2">
                  <Image src="/unmul.png" width={40} height={40} />
                </div>
                <div className="pl-2 font-bold">
                  <h1 className="">Universitas Mulawarman</h1>
                </div>
              </div>
              {/* End of Header 1 */}

              {/* Timeline 1*/}
              <div className="flex flex-col">
                <div className="my-5">
                  <div className="flex flex-row items-center border-l-2 border-gray-400 h-20 mx-5">
                    <div 
                      className="flex items-start justify-center w-3 h-3 -ml-[0.45rem] mr-5 rounded-full bg-gray-400">
                    </div>
                    <div className="py-2">
                      <p className="font-bold">Laboratory Assistant</p>
                      <p className="text-xs font-thin">Algorithms and Programming Basic</p>
                      <p className="text-sm font-thin">Aug 2023 - Dec 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Timeline 1*/}
            </div>
            {/* End of Exp 1 */}

            {/* Exp 2 */}
            <div className="border border-slate-400 rounded mr-5 shadow-xl h-full">
              {/* Header 2 */}
              <div className="pb-4 mx-5 mt-5 flex flex-row items-center border border-b-slate-300">
                <div className="pr-2">
                  <Image src="/ai.png" width={40} height={40} />
                </div>
                <div className="pl-2 font-bold">
                  <h1 className="">Association of Informatics</h1>
                </div>
              </div>
              {/* End of Header 2 */}

              {/* Timeline 2*/}
              <div className="flex flex-col">
                <div className="my-5">
                  <div className="flex flex-row items-center border-l-2 border-gray-400 h-20 mx-5">
                    <div 
                      className="flex items-start justify-center w-3 h-3 -ml-[0.45rem] mr-5 rounded-full bg-gray-400">
                    </div>
                    <div className="py-2">
                      <p className="font-bold">Staff of Student Talent & Interest Department</p>
                      <p className="text-sm font-thin">Jan 2023 - Dec 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Timeline 2*/}
            </div>
            {/* End of Exp 2 */}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="h-full px-48 py-10 bg-[#F0ECE5]">
          <div className="pb-10 text-5xl font-black">
            <h1>My Works</h1>
          </div>
          <div className="grid grid-cols-2">
            <ShowProject src="https://source.unsplash.com/macbook-pro-on-top-of-brown-table-1SAnrIxw5OY" className="flex justify-start mb-5" />
            <ShowProject src="https://source.unsplash.com/silver-imac-on-brown-wooden-table-TQYTWfN1b7M" className="flex justify-end mb-5" />
            <ShowProject src="https://source.unsplash.com/shallow-focus-photo-of-black-flat-screen-computer-monitor-YtDIYzUAG9Q" className="flex justify-start mb-5" />
            <div className="flex justify-center items-center">
              <div className="border border-gray-400 rounded-lg shadow-lg hover:border-gray-700 hover:bg-gray-300">
                <div className="font-black text-gray-400 text-xl p-3 hover:text-gray-700">
                  <Link href="https://github.com/nabilsaragih" target="_blank">VIEW MORE WORK HERE</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="footer">
        <div className="h-full py-16 px-48 bg-[#31304D]">
          <div className="grid grid-cols-2 text-white">
            <div className="flex flex-row divide-x-2 items-center">
              <Footer.Copyright />
            </div>
            <div className="flex flex-row items-center justify-end">
              <Footer.Contact link="mailto:mnabilsaragih@gmail.com" iconPath="gmail.svg" />
              <Footer.Contact link="https://www.linkedin.com/in/nabilsaragih/" iconPath="linkedin.svg" />
              <Footer.Contact link="https://github.com/nabilsaragih" iconPath="github.svg" />
              <Footer.Contact link="https://www.instagram.com/nabilsaragih._/" iconPath="instagram.svg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
