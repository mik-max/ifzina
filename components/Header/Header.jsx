"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react'
import { BiMenu  } from 'react-icons/bi'
import { IoMdClose } from "react-icons/io";

import { Dialog, Menu, Transition } from '@headlessui/react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className="flex justify-between items-center p-4">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
        </Link>
        <div className="">
          {/* <BiMenu className="fa text-white text-lg" onClick={() => setShowMenu(showMenu)}/> */}
          <ul
            className=" nav-links md:flex justify-end hidden"
            style={{ right: showMenu ? 0 : -200 }}
          >
            <li className="mr-6">
              <Link href="/">
                <p className="text-white hover:text-gray-200">HOME</p>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about">
                <p className="text-white hover:text-gray-200">ABOUT</p>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/course">
                <p className="text-white hover:text-gray-200">COURSE</p>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/blog">
                <p className="text-white hover:text-gray-200">BLOG</p>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/contact">
                <p className="text-white hover:text-gray-200">CONTACT</p>
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="-m-2.5 p-2.5 text-white lg:hidden"
            onClick={() => setShowMenu(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <BiMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Transition.Root show={showMenu} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
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
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <Image
                        alt="logo"
                        className="h-8 w-auto"
                        src="/images/logo.png"
                        width={200}
                        height={200}
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul className="flex flex-1 flex-col gap-y-7 justify-start">
                        <li className="mr-6">
                          <Link href="/">
                            <p className="text-white hover:text-gray-200">
                              HOME
                            </p>
                          </Link>
                        </li>
                        <li className="mr-6">
                          <Link href="/about">
                            <p className="text-white hover:text-gray-200">
                              ABOUT
                            </p>
                          </Link>
                        </li>
                        <li className="mr-6">
                          <Link href="/course">
                            <p className="text-white hover:text-gray-200">
                              COURSE
                            </p>
                          </Link>
                        </li>
                        <li className="mr-6">
                          <Link href="/blog">
                            <p className="text-white hover:text-gray-200">
                              BLOG
                            </p>
                          </Link>
                        </li>
                        <li className="mr-6">
                          <Link href="/contact">
                            <p className="text-white hover:text-gray-200">
                              CONTACT
                            </p>
                          </Link>
                        </li>
                      </ul>
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