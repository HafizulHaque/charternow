'use client';

import Link from 'next/link'
import React from 'react'
import { Facebook, Youtube, Linkedin, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='bg-cstmTeal text-white'>
      <div className="px-48 py-16">

        {/* useful links  */}
        <div className="flex gap-x-16 pb-16 border-b border-white">
          <div className="flex-[2]">
            <h2 className='text-3xl font-bold mb-4'>Charter Now</h2>
            <ul className='block'>
              <li>
                <Link 
                  className='text-xl font-light block my-2 hover:text-white/80' 
                  href="/about">About
                </Link>
              </li>
              <li>
                <Link 
                  className='text-xl font-light block my-2 hover:text-white/80' 
                  href="/policy">Policy
                </Link>
              </li>
              <li>
                <Link 
                  className='text-xl font-light block my-2 hover:text-white/80' 
                  href="/team">Team
                </Link>
              </li>
              <li>
                <Link 
                  className='text-xl font-light block my-2 hover:text-white/80' 
                  href="/blog">Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-[2]">
            <h2 className='text-3xl font-bold mb-4'>Customer</h2>
            <ul className='block'>
              <li>
                <Link 
                  className='text-xl font-light block my-2 hover:text-white/80' 
                  href="/rent-a-car">Rent a Car
                </Link>
              </li>
              <li>
                <Link 
                  className='text-xl font-light block my-2 hover:text-white/80' 
                  href="/rent-a-motorcycle">Rent a Motorcycle
                </Link>
              </li>
              <li>
                <Link 
                  className='text-xl font-light block my-2 hover:text-white/80' 
                  href="/rent-a-boat">Ren a boat
                </Link>
              </li>
              <li>
                <Link 
                  className='text-xl font-light block my-2 hover:text-white/80' 
                  href="/faq">FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-[2]">
            <h2 className='text-3xl font-bold mb-4'>Host</h2>
            <ul className='block'>
              <li>
                <Link 
                  className='text-xl font-light block my-2 hover:text-white/80' 
                  href="/list-vehicle">List your vehicle
                </Link>
              </li>
              <li>
                <Link 
                  className='text-xl font-light block my-2 hover:text-white/80' 
                  href="/insurance">Insurance and protection
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-[3]">
            <div className='mb-4 flex items-center gap-x-2'>
              <Image src="/CharterNowRevert.svg" alt='icon' height={48} width={48}/>
              <h1 className='text-2xl'>Charter Now</h1>
            </div>
            <p className='text-xl font-light tracking-tight leading-7'>
              Your ultimate destination for booking cars, motorcycles, and boats with ease. Experience seamless booking and unforgettable journeys, all in one place.
            </p>
          </div>
        </div>

        {/* copyright and social icon  */}
        <div className="pt-8">
          <div className="flex justify-between items-center text-lg font-light">
            <div className="flex gap-8">
              <p>&copy;{new Date().getFullYear()} Charter Now</p>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Sitemap</p>
              <p>Cookie Preferences</p>
            </div>
            <div className="flex gap-8">
              <Link href={'/'}><Facebook/></Link>
              <Link href={'/'}><Twitter/></Link>
              <Link href={'/'}><Instagram/></Link>
              <Link href={'/'}><Linkedin/></Link>
              <Link href={'/'}><Youtube/></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
