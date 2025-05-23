import React from 'react'
import { FaMapPin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import bus from '../../assets/bus.png'

import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full lg:px-28 md:px-16 sm:px-7 px-4 py-8 bg-gray-100 dark:bg-neutral-900/70">
      <div className="grid md:grid-cols-5 gap-5">
        <div className="space-y-5 col-span-2">
          <Link to="/" className='text-xl text-neutral-800 dark:text-neutral-200 font-bold'>
            <img src={bus} alt="logo" className="w-44 h-auto object-contain" />
          </Link>
          <p className="text-neutral-600 dark:text-neutral-500 text-base font-normal pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam placeat 
          </p>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">About Us</h1>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-500 text-base font-normal">
            <li>
              <Link to="/about" className='hover:text-red-700 ease-in-out duration-300'>About</Link>
            </li>
            <li>
              <Link to="/terminals" className='hover:text-red-700 ease-in-out duration-300'>Terminals</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-red-700 ease-in-out duration-300'>Services</Link>
            </li>
            <li>
              <Link to="/contact-us" className='hover:text-red-700 ease-in-out duration-300'>Contact us</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">Services</h1>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-500 text-base font-normal">
            <li>
              <Link to="#" className='hover:text-red-700 ease-in-out duration-300'>Safety Guarantee</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-red-700 ease-in-out duration-300'>FAQ & Support</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-red-700 ease-in-out duration-300'>Luxury Buses</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-red-700 ease-in-out duration-300'>Enough Facilities</Link>
            </li>
          </ul>
        </div>

        {/* <div className="space-y-7">
          <h1 className="text-lg font-medium">Get In Touch</h1>
          <div className="space-y-4">
            <div className="flex gap-x-2">
              <FaMapPin className='text-2xl text-neutral-600 dark:text-neutral-500' />
              <div className="flex flex-col">
                <p className="text-xs text-neutral-600 dark:text-neutral-500">
                  For Support & Reservations
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  123, Main Street, Anytown, USA
                </p>
              </div>
            </div>

            <div className="flex gap-x-2">
              <FaMapPin className='text-2xl text-neutral-600 dark:text-neutral-500' />
              <div className="flex flex-col">
                <p className="text-xs text-neutral-600 dark:text-neutral-500">
                  For Support & Reservations
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  123, Main Street, Anytown, USA
                </p>
              </div>
            </div>

            <div className="flex gap-x-2">
              <FaMapPin className='text-2xl text-neutral-600 dark:text-neutral-500' />
              <div className="flex flex-col">
                <p className="text-xs text-neutral-600 dark:text-neutral-500">
                  For Support & Reservations
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  123, Main Street, Anytown, USA
                </p>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </footer>
  )
}

export default Footer