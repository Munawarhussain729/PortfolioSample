import Head from 'next/head'
import { BsFillMoonStarsFill } from "react-icons/bs"
import {AiFillLinkedin, AiFillTwitterCircle, AiFillGithub} from "react-icons/ai"
import TempImg from "./../../public/dev-ed-wave.png"
import design from '../../public/design.png';
import code from  '../../public/code.png';
import consulting from  '../../public/consulting.png';
import web1 from  '../../public/web1.png';
import web2 from  '../../public/web2.png';
import web3 from  '../../public/web3.png';
import web4 from  '../../public/web4.png';
import web5 from  '../../public/web5.png';
import web6 from  '../../public/web6.png';

import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Munawar Hussain Portfolio</title>
        <meta name='description' content='Generated by MH' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40' >
        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Munawar Hussain</h1>
            <ul className='flex items-center'>
              <li className='cursor-pointer text-2xl'><BsFillMoonStarsFill /></li>
              <li className= 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'><a href='#'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Munawar Hussain</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Full Stack Developer</h3>
            <p className='text-md py-5 leading-8 text-grey-800 max-auto md:text-xl'>A young and Motivated Full Stack developer with a strong Foundation in both 
              Frontend and Backend technologies.I Make seamless web application that 
              meet the user and client's expectation </p>
              <div className='text-5xl flex justify-center gap-16 py-3 text-grey-600'>
                <AiFillGithub/>
                <AiFillLinkedin/>
                <AiFillTwitterCircle/>
              </div>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20'>
            <Image src={TempImg} />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'> Services I Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Since the beginning i have offering srevices as web developer to Multiple organizations
              So i can provide an efficient and expected result with in sufficient amount of time
            </p>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-xl p-10 rounded-xl my-10'>
                <Image src={design} width={100} height={100} className='mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                <p className='py-2'>Creating elegant designs suited for needs according 
                  to core design theory</p>
                  <h4 className='py-4 text-teal-600'>Designs I made using </h4>
                  <p className='text-grey-800 py-1'>Css</p>
                  <p className='text-grey-800 py-1'>Bootstrap</p>
                  <p className='text-grey-800 py-1'>React Bootstrap</p>
                  <p className='text-grey-800 py-1'>Tailwind css</p>
              </div>

              <div className='text-center shadow-xl p-10 rounded-xl my-10'>
                <Image src={code} width={100} height={100} className='mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                <p className='py-2'>Creating elegant designs suited for needs according 
                  to core design theory</p>
                  <h4 className='py-4 text-teal-600'>Designs I made using </h4>
                  <p className='text-grey-800 py-1'>Css</p>
                  <p className='text-grey-800 py-1'>Bootstrap</p>
                  <p className='text-grey-800 py-1'>React Bootstrap</p>
                  <p className='text-grey-800 py-1'>Tailwind css</p>
              </div>

              <div className='text-center shadow-xl p-10 rounded-xl my-10 '>
                <Image src={consulting} width={100} height={100} className='mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                <p className='py-2'>Creating elegant designs suited for needs according 
                  to core design theory</p>
                  <h4 className='py-4 text-teal-600'>Designs I made using </h4>
                  <p className='text-grey-800 py-1'>Css</p>
                  <p className='text-grey-800 py-1'>Bootstrap</p>
                  <p className='text-grey-800 py-1'>React Bootstrap</p>
                  <p className='text-grey-800 py-1'>Tailwind css</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
