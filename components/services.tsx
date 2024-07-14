'use client'
import { motion } from 'framer-motion'
import FadeIn from '../lib/variants'
import AnimatedCounter from '../lib/animatedCounter'
import { tech } from './FAQ'
import * as React from 'react';

const Services = () => {
  return (
    <section id='services' className='z-30 -translate-y-1 bg-primary/[0.85]'>
      <div className='container w-full py-[100px] lg:py-[200px]'>
        <div className='flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0'>
          <motion.div
            variants={FadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex w-full flex-col justify-between lg:mr-8 lg:w-1/2'
          >
            <h1 className='pb-4 text-[40px] font-bold leading-[3rem] text-gray-400'>
              My <span className='text-secondary'>Services</span>
            </h1>
            <p className='flex items-center font-semibold text-gray-500'>
              I have the perfect solution for your web development needs. By
              adopting a modern stack, like MERN,FULL-STACK and incorporating
              TypeScript for enhanced type safety, we can create an exceptional
              web application.
            </p>
            <div className='flex justify-between space-x-4 py-8'>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold text-gray-400'>
                  Built Projects
                </p>
                <p className='text-[36px] font-bold text-orange-600'>
                  {' '}
                  + <AnimatedCounter from={0} to={21} />
                </p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold text-gray-500'>
                  {' '}
                  Git Commits
                </p>
                <p className='text-[36px] font-bold text-secondary'>
                  <AnimatedCounter from={0} to={91} />
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex h-full flex-col gap-8'
          >
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-gray-400'>01</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold text-orange-400'>
                  Front-end development
                </h2>
                <p className='flex items-center justify-center font-medium text-gray-400'>
                  Build your web applications with modern web technologies like
                  React, Next.js, and Tailwind CSS
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-secondary/[0.85]'>02</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                  Back-end development
                </h2>
                <p className='flex items-center justify-center font-medium text-gray-400'>
                  Build scalable and secure back-end applications with Node.js,
                  Express, and MongoDB OR Java , Spring Boot and MySQL.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
