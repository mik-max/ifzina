"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState, useEffect } from 'react'
import { BiMenu  } from 'react-icons/bi'
import { IoMdClose } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiShop } from "react-icons/gi";
import { MdHomeRepairService } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { FaHelmetSafety } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import { Dialog, Menu, Transition } from '@headlessui/react'


const Header = () => {
  const router = usePathname(); 
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Check the pathname of the current route and set the active link accordingly
    setActiveLink(router);
  }, [router]);

//   useEffect(() => {
//     // Retrieve active link from local storage on component mount
//     const storedActiveLink = localStorage.getItem('activeLink');
//     if (storedActiveLink) {
//       setActiveLink(storedActiveLink);
//     }
//   }, []);

//  // Function to handle menu item click
//  const handleMenuItemClick = (menuItem) => {
//   setActiveLink(menuItem);
//   // Save active link to local storage
//   localStorage.setItem('activeLink', menuItem);
// };
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
      className={`${isScrolled ? "bg-white shadow-md" : "bg-white"} 
      ${"w-full fixed top-0 left-0 right-0 z-10 transition-all ease-in duration-300 h-[100px]"}`}
    >
      <nav className="flex justify-between items-center p-4">
        <Link href="/">
          <Image src="/images/ifzina_logo.png" alt="Logo" width={200} height={200} />
        </Link>
        <div className="nav-links">
          {/* <BiMenu className="fa text-black text-lg" onClick={() => setShowMenu(showMenu)}/> */}
          <ul
            className="  md:flex justify-end hidden"
            // style={{ right: showMenu ? 0 : -200 }}
          >
            <li className={`${activeLink === '/' ? 'active' : ''} mr-6 ${isScrolled ? "after:bg-black-300" : "after:bg-black-300"}`}>
               
              <Link href="/" className={`flex gap-2 items-center ${activeLink === '/' ? 'active' : ''}`} >
               <MdHome fontSize={'18px'} className='mt-[-1px]' color={isScrolled ? "black" : "black"} />
                <p className={isScrolled ? "text-black" : "text-black"}>HOME</p>
              </Link>
            </li>
            <li className={`mr-6 ${activeLink === '/service' ? 'active' : ''} ${isScrolled ? "after:bg-black-300" : "after:bg-black-300"}`}>
              <Link href="/service" className={`flex gap-2 items-center `}>
              <MdHomeRepairService fontSize={'18px'} className='mt-[-1px]' color={isScrolled ? "black" : "black"} />
                <p className={isScrolled ? "text-black" : "text-black"}> SERVICES</p>
              </Link>
            </li>  
            <li className={`mr-6 ${activeLink === '/market' ? 'active' : ''} ${isScrolled ? "after:bg-black-300" : "after:bg-black-300"}`}>
              <Link href="/market" className={`flex gap-2 items-center `} >
              <GiShop fontSize={'18px'} className='mt-[-1px]' color={isScrolled ? "black" : "black"} />
                <p className={isScrolled ? "text-black" : "text-black"}> MARKET</p>
              </Link>
            </li>  
            <li className={`mr-6 ${activeLink === '/career' ? 'active' : ''} ${ isScrolled ? "after:bg-black-300" : "after:bg-black-300"}`}>
              <Link href="/career" className={`flex gap-2 items-center`}>
                <FaHelmetSafety fontSize={"18px"} className="mt-[-1px]" color={isScrolled ? "black" : "black"} />
                <p className={isScrolled ? "text-black" : "text-black"}>CAREER </p>
              </Link>
            </li>
            <li className={`mr-6  ${activeLink === '/about' ? 'active' : ''} ${isScrolled ? "after:bg-black-300" : "after:bg-black-300"}`} >
              <Link href="/about" className={`flex gap-2 items-center ${activeLink === '/about' ? 'active' : ''}`} >
               <BsFillPeopleFill fontSize={'18px'} className='mt-[-1px]' color={isScrolled ? "black" : "black"} />
                <p className={isScrolled ? "text-black" : "text-black"}>
                  ABOUT
                </p>
              </Link>
            </li>
            <li className={`mr-6 ${activeLink === '/contact' ? 'active' : ''} ${isScrolled ? "after:bg-black-300" : "after:bg-black-300"}`}>
              <Link href="/contact" className={`flex gap-2 items-center ${activeLink === '/contact' ? 'active' : ''}`} >
                    <MdPermContactCalendar fontSize={'18px'} className='mt-[-1px]' color={isScrolled ? "black" : "black"} />
                    <p className={isScrolled ? "text-black" : "text-black"}> CONTACT </p>
              </Link>
            </li>

          </ul>
        </div>
        <button
          type="button"
          className={
            isScrolled
              ? "-m-2.5 fa p-2.5 text-black "
              : "-m-2.5 fa p-2.5 text-black "
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
                          className="h-6 w-6 text-black"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 bg-[#00264D] overflow-y-auto pb-4">
                    <div className="flex h-16 shrink-0 items-center  px-6">
                      <Image
                        alt="logo"
                        className="h-8 w-auto"
                        src="/images/logo.png"
                        width={200}
                        height={200}
                      />
                    </div>
                    <nav className="flex shrink-0 items-start flex-col  px-6 ">
                      <div className="nav-links">
                        <ul className="flex shrink-0 flex-col gap-y-7  items-start justify-start">   
                          <li className="mr-6" onClick={() => setShowMenu(false)}>
                              <Link href="/" className='flex gap-2 items-center' isActive={() => setActiveLink('home')}>
                                   <MdHome fontSize={'18px'} className='mt-[-1px]' color="white" />
                                   <p className="text-black">HOME</p>
                              </Link>
                          </li>

                          <li className="mr-6" onClick={() => setShowMenu(false)}>
                              <Link href="/service" className='flex gap-2 items-center' isActive={() => setActiveLink('service')}>
                                   <MdHomeRepairService fontSize={'18px'} className='mt-[-1px]' color="white" />
                                   <p className="text-black">SERVICES</p>
                              </Link>
                          </li>
                          <li className="mr-6" onClick={() => setShowMenu(false)}>
                              <Link href="/market" className='flex gap-2 items-center' isActive={() => setActiveLink('market')}>
                                   <GiShop fontSize={'18px'} className='mt-[-1px]' color="white" />
                                   <p className="text-black">MARKET</p>
                              </Link>
                          </li>
                          
                          <li  className="mr-6"  onClick={() => setShowMenu(false)} >
                            <Link href="/career" className="flex gap-2 items-center" isActive={() => setActiveLink('career')}  >
                              <FaHelmetSafety fontSize={"18px"} className="mt-[-1px]" color="white"/>
                              <p className="text-black">CAREER</p>
                            </Link>
                          </li>
                          <li className="mr-6" onClick={() => setShowMenu(false)}>
                              <Link href="/about" className='flex gap-2 items-center' isActive={() => setActiveLink('about')}>
                                   <BsFillPeopleFill fontSize={'18px'} className='mt-[-1px]' color="white" />
                                   <p className="text-black">ABOUT</p>
                              </Link>
                         </li>

                          <li className="mr-6" onClick={() => setShowMenu(false)}>
                              <Link href="/contact" className='flex gap-2 items-center' isActive={() => setActiveLink('contact')}>
                                        <MdPermContactCalendar fontSize={'18px'} className='mt-[-1px]' color="white" />
                                        <p className="text-black">CONTACT</p>
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