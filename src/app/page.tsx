import Image from 'next/image'
import Navbar from '@/components/Navbar'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <Navbar/>
      <div className='flex items-center justify-center'>
      <div className='flex items-start w-1/2  flex-col m-10 justify-center'>
        <p className='m-5' >
          Frustrated With  <span className=' font-bold text-2xl xl:text-4xl '>Bugs.</span>
        </p>
        <p className='m-5' >
        Tired of Repeating <span className=' font-bold text-2xl xl:text-4xl '>Tasks.</span>
        </p>
        <p className='m-5' >
        Feeling Lost as a <span className=' font-bold text-2xl xl:text-4xl '>Fresher.</span>
        </p>


      </div>
      </div>


      <div className=' flex flex-col items-center justify-center mt-16 p-5 border border-white bg-white text-black rounded-xl w-80 xl:w-1/2'>
        <h3 className='font-bold text-2xl m-3' > ABOUT</h3>

          <p>
            Fix bugs in an existing platform or assign an entire project to us
            the beauty is that if you want to fix bugs we would charge you not by the time but by the number of Bugs
            not the amount of time we take to fix it. Also if you are a fresher instead of hiring a 
            dedicated tutor You can avail the help of an experienced developer to give directions.
          </p>
      </div>

      <h3 className='font-bold text-2xl mt-10 mb-3 ' >US.</h3>

      <div className='w-80 xl:w-1/2  flex flex-col items-center justify-center mt-5 '>

        <div className='p-5 rounded-xl w-full flex items-center justify-evenly bg-white text-black '>
          <Image className=' rounded-full'  src="/siraj.jpeg" alt='your image' height={50} width={50} />
          <div className='flex flex-col items-start justify-center w-48'>
            <h3 className='font-bold ' >Muhammed Sirajudeen</h3>
            <p className='text-xs'>An avid <span className='font-bold'>Full Stack Developer</span> with experience in multiple domains</p>
          </div>
        </div>
      
        <div className='p-5 rounded-xl w-full flex items-center justify-evenly bg-white text-black mt-5 '>
          <Image className=' rounded-full'  src="/deepu.jpeg" alt='your image' height={50} width={50} />
          <div className='flex flex-col items-start justify-center w-48'>
            <h3 className='font-bold ' >Deepu K</h3>
            <p className='text-xs'>Passionate <span className='font-bold'>Security Analyst & Backend Developer</span> with extensive experience and accreditations in cybersecurity</p>
          </div>
        </div>

        <div className='p-5 rounded-xl w-full flex items-center justify-evenly bg-white text-black mt-5 '>
          <Image className=' rounded-full'  src="/yadhu.JPG" alt='your image' height={50} width={50} />
          <div className='flex flex-col items-start justify-center w-48'>
            <h3 className='font-bold ' >Yadhu Krishnan U</h3>
            <p className='text-xs'>Creative <span className='font-bold'>UI/UX Designer</span> with amazing creativity in creating User Interfaces and Experiences</p>
          </div>
        </div>

        {/* add contact details here just add whatsapp telegram and instagram  */}
        {/* seperate page for quotes  */}

      </div>
    </div>
  )
}
