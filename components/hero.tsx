import { Download } from 'lucide-react'
import Link from 'next/link'
import Social from '@/components/social'
import Photo from '@/components/photo'

const Hero = () => {
  return (
    <section className='w-f pt-40'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-8'>
          {/* text */}

          <div className='text-center font-semibold lg:text-xl xl:text-left'>
            <span>Hello, I&apos;m</span>
            <h1 className='text-[40px] font-bold capitalize leading-[3rem]'>
              Pratul <br />
              <span className='under-line text-[42px] tracking-widest text-secondary'>
                Ma
              </span>
              kar
            </h1>
            <div className='py-8'>
              <p className='flex items-center justify-center font-medium text-gray-300'>
                I am a web developer with a passion for building beautiful and
                functional websites. I am a self-taught developer with a
                background in computer science and a passion for learning new
                technologies. I am always looking for new challenges and
                opportunities to grow as a developer.
              </p>
            </div>
            <div className='mt-4 flex flex-col items-center justify-center xl:flex-row xl:justify-start xl:space-x-8'>
              <div className='flex gap-x-2'>
                <Link
                  href='https://res.cloudinary.com/dnsteuqq1/image/upload/cv_blijgd.pdf'
                  target='_blank'
                  className='flex items-center space-x-2 rounded-lg border-2 border-gray-700 px-6 py-3 font-medium uppercase text-orange-600 transition-all hover:border-transparent hover:bg-orange-600 hover:text-lighted'
                >
                  <span className='text-sm font-semibold'>Download Cv</span>
                  <Download className='size-5' />
                </Link>
              </div>
              <div className='flex py-4 xl:py-0'>
                <Social />
              </div>
            </div>
          </div>
          {/* image */}

          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
