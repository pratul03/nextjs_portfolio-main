'use client'

import { Link, animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import Nav from '@/components/nav'
import MobileNav from '@/components/mobileNav'

const Header = () => {
  return (
    <header className='fixed z-50 w-full bg-primary py-3 xl:py-4'>
      <div className='container mx-auto flex cursor-pointer items-center justify-between'>
        {/* logo */}
        <Link to='/' spy={true} smooth={true} className='cursor-pointer'>
          <Image
            src='/logo.svg'
            height={54.53}
            width={41.35}
            alt='logo'
            className='transition-all hover:scale-90 hover:cursor-pointer'
          />
        </Link>

        {/* desktop nav */}
        <div className='hidden items-center gap-x-8 xl:flex'>
          <Nav />
          <Link
            to='Contact'
            spy={true}
            smooth={true}
            className='text-md rounded-lg border-2 px-5 py-2 font-medium text-[#db511b] transition-all hover:border-[#db511b] hover:bg-[#db511b] hover:text-white'
          >
            Hire me
          </Link>
        </div>
        {/* mobile nav */}
        <div className='z-50 xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
