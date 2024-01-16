import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-2 py-6 justify-center bg-[#161A30]'>
        <div className='flex justify-start ml-48 font-semibold text-white'>
          <h1>Nabil Saragih</h1>
        </div>
        <div className='flex justify-end mr-48 font-semibold text-white'>
          <Link href="" className='mr-5'>About</Link>
          <Link href="" className='mr-5'>Experiences</Link>
          <Link href="" className='mr-5'>Projects</Link>
          <Link href="" >Blogs</Link>
        </div>
      </div>

      <div className='grid grid-cols-1 justify-start py-36 pl-48 bg-[#161A30] text-white'>
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

      <div className='py-40 pl-48 bg-[#F0ECE5]'>
      
      </div>
    </>
  )
}
