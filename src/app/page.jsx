import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import NavbarScrollTo from './components/NavbarScrollTo';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <section id="navbar">
        <div className='grid grid-cols-2 py-6 justify-center bg-[#161A30]'>
          <div className='flex justify-start ml-48 font-semibold text-white'>
            <h1>Nabil Saragih</h1>
          </div>
          <div className='flex justify-end mr-48 font-semibold text-white'>
            <NavbarScrollTo id='hero' title='About' className='mr-5' />
            <NavbarScrollTo id='exp' title='Experiences' className='mr-5' />
            <NavbarScrollTo id='' title='Projects' className='mr-5' />
            <NavbarScrollTo id='' title='Blogs' className='mr-0' />
          </div>
        </div>
      </section>

      {/* Hero - About */}
      <section id="hero">
        <div className='grid grid-cols-1 justify-start h-full py-48 px-48 bg-[#161A30] text-white'>
          <h1 className='font-bold'>Hello, I'm</h1>
          <h1 className='font-bold text-4xl'>Nabil Saragih</h1>
          <h1 className='font-bold mb-5'>Undergraduate Student at Mulawarman University</h1>
          <h1 className='grid grid-cols-2 mb-5'>As a college student at Mulawarman University majoring in Informatics, I have interests in several fields, including Artificial Intelligence and Robotics.</h1>

          <div>
            <h1 className='font-bold'>You can connect with me</h1>
            <h1>I'm available on social media below, feel free to contact me at</h1>
            <div className='flex justify-start text-2xl mt-5 mb-14'>
              <div className='border-white border rounded-xl mr-3 flex items-center bg-[#161A30] hover:bg-white hover:text-black'>
                <Link href="https://github.com/nabilsaragih" target="_blank" className='px-2 py-0.5'>
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
              <div className='border-white border rounded-xl mr-3 flex items-center bg-[#161A30] hover:bg-white hover:text-black'> 
                <Link href="https://www.linkedin.com/in/nabilsaragih/" target="_blank" className='px-2 py-0.5'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
              <div className='border-white border rounded-xl mr-3 flex items-center bg-[#161A30] hover:bg-white hover:text-black'>
                <Link href="https://www.instagram.com/nabilsaragih._/" target="_blank" className='px-2 py-0.5'>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
              <div className='border-white border rounded-xl mr-3 flex items-center bg-[#161A30] hover:bg-white hover:text-black'>
                <Link href="https://discord.com/users/474779249186832385" target="_blank" className='px-1 py-0.5'>
                  <FontAwesomeIcon icon={faDiscord} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="exp">
        <div className='h-full py-10 px-48 bg-[#F0ECE5]'>
          <div className='pb-10 text-5xl font-black'>
            <h1>Experiences</h1>
          </div>
          <div className='grid grid-cols-2'>
            {/* Header 1 */}
            <div className='border border-slate-400 rounded mr-5 shadow-lg h-full'>
              <div className='pb-4 mx-5 my-5 flex flex-row items-center border border-b-slate-300'>
                <div className='pr-2'>
                  <Image src='/unmul.png' width={40} height={40} />
                </div>
                <div className='pl-2 font-bold'>
                  <h1 className=''>Universitas Mulawarman</h1>
                </div>
              </div>
            </div>

            {/* Timeline 1*/}

            {/* Header 2 */}
            <div className='border border-slate-400 rounded mr-5 shadow-lg h-full'>
              <div className='pb-4 mx-5 my-5 flex flex-row items-center border border-b-slate-300'>
                <div className='pr-2'>
                  <Image src='/ai.png' width={40} height={40} />
                </div>
                <div className='pl-2 font-bold'>
                  <h1 className=''>Association of Informatics</h1>
                </div>
              </div>
            </div>

            {/* Timeline 2 */}
          </div>
        </div>
      </section>
    </>
  )
}
