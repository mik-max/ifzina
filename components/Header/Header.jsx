"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState, useEffect } from 'react'
import { BiMenu  } from 'react-icons/bi'
import { IoMdClose } from "react-icons/io";

import { Dialog, Menu, Transition } from '@headlessui/react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return( ()=>{ 
      window.removeEventListener('scroll', handleScroll);
    } )
  }, [])

  return (
    <header
      className={`${isScrolled ? "bg-white shadow-md" : "bg-transparent"} 
      ${"w-full fixed top-0 left-0 right-0 z-10 transition-all ease-in duration-300"}`}
    >
      <nav className="flex justify-between items-center p-4">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
        </Link>
        <div className="nav-links">
          {/* <BiMenu className="fa text-white text-lg" onClick={() => setShowMenu(showMenu)}/> */}
          <ul
            className="  md:flex justify-end hidden"
            // style={{ right: showMenu ? 0 : -200 }}
          >
            <li className="mr-6 ">
              <Link href="/">
                <p className={isScrolled ? "text-black" : "text-white"}>HOME</p>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about">
                <p className={isScrolled ? "text-black" : "text-white"}>
                  ABOUT
                </p>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/market">
                <p className={isScrolled ? "text-black" : "text-white"}>
                  MARKET
                </p>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/service">
                <p className={isScrolled ? "text-black" : "text-white"}>
                  SERVICES
                </p>
              </Link>
            </li>
            
            <li className="mr-6">
              <Link href="/contact">
                <p className={isScrolled ? "text-black" : "text-white"}>
                  CONTACT
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className={
            isScrolled
              ? "-m-2.5 fa p-2.5 text-black "
              : "-m-2.5 fa p-2.5 text-white "
          }
          onClick={() => setShowMenu(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <BiMenu className="h-6 w-6" aria-hidden="true" />
        </button>
        <Transition.Root show={showMenu} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 md:hidden"
            onClose={setShowMenu}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setShowMenu(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <IoMdClose
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 bg-[#004080] overflow-y-auto px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <Image
                        alt="logo"
                        className="h-8 w-auto"
                        src="/images/logo.png"
                        width={200}
                        height={200}
                      />
                    </div>
                    <nav className="flex shrink-0 items-start flex-col">
                      <div className="nav-links">
                        <ul className="flex shrink-0 flex-col gap-y-7  items-start justify-start">
                          <li className="mr-6">
                            <Link href="/">
                              <p className="text-white">HOME</p>
                            </Link>
                          </li>
                          <li className="mr-6">
                            <Link href="/about">
                              <p className="text-white">ABOUT</p>
                            </Link>
                          </li>
                          <li className="mr-6">
                            <Link href="/course">
                              <p className="text-white">SERVICES</p>
                            </Link>
                          </li>
                          <li className="mr-6">
                            <Link href="/blog">
                              <p className="text-white">INDUSTRIES</p>
                            </Link>
                          </li>
                          <li className="mr-6">
                            <Link href="/contact">
                              <p className="text-white">CONTACT</p>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </nav>
    </header>
  );
}

export default Header;