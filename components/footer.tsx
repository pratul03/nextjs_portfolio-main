'use client'

import Image from 'next/image'
import { Link, animateScroll as scroll } from 'react-scroll'
import React from 'react'
import Social from '@/components/social'

const Footer = () => {
  return (
    <section className='bg-[#1d1b1b] py-4 rounded-t-md'>
      <div className='container flex flex-col items-center justify-between gap-4 xl:flex-row'>
        <p className='text-xl font-semibold uppercase'>
          {' '}
          <span>® 2024</span> Pratul Makar
        </p>
        <Link to='/' spy={true} smooth={true} className='cursor-pointer'>
          <Image src='/logo.svg' width={54.08} height={336.65} alt='logo' />
        </Link>
        <Social />
      </div>
    </section>
  )
}

export default Footer
