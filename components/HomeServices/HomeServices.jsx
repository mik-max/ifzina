import React from 'react'
import styles from './HomeServices.module.css'
import clsx from 'clsx'
import { StylizedImage } from '@/components/StylizedImage'
import { List, ListItem } from '@/components/List'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import designer3 from '@/public/images/designer3.png'
function HomeServices() {
  return (
    <div>
      {/* <section className={styles.campus}>
         <h1  className={styles.h1}>Services Offered</h1>
         <p  className={styles.p}>
            Contact Us Today to Discuss Your Project Needs and Learn How IFZINA Can Partner With You to Bring Your Vision to Life!
         </p>
         
         <div className={`${styles.row} mt-[5%] bg-[#EFF1F block sm:flex justify-center items-center justify-items-center gap-x-5 `}>
            <div className={`${styles.col} bg-[#EFF1F`}>
               <img src="images/designer3.png"/>
               <div className={styles.layer}>
                  <h3 className={styles.h3}>Engineering Design and Consultation</h3>
               </div>
            </div>
            <div className={`${styles.col} bg-[#EFF1F`}>
               <img src="images/designer3.png"/>
               <div className={styles.layer}>
                  <h3>Procurement and Supply Chain Management</h3>
               </div>
            </div>
            <div className={`${styles.col} bg-[#EFF1F`}>
               <img src="images/designer3.png"/>
               <div className={styles.layer}>
                  <h3>Construction and Project Management</h3>
               </div>
            </div>
         </div>
      </section> */}

      <SectionIntro
        eyebrow="Services Offered"
      //   title="Contact Us Today to Discuss Your Project Needs and Learn How IFZINA Can Partner With You to Bring Your Vision to Life!"
        className="mt-24 sm:mt-32 lg:mt-20"
      >
        <p>
          Contact Us Today to Discuss Your Project Needs and Learn How IFZINA Can Partner With You to Bring Your Vision to Life!
        </p>
      </SectionIntro>
      <Container className="mt-10">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[23.75rem] flex-none lg:w-[48rem]">
              <StylizedImage
                src={designer3}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0  lg:pl-4">
            <ListItem title="Engineering Design and Consultation">
                At IFZINA, we believe that every project is unique and deserves a tailored approach. 
                Our engineering design and consultation services are crafted to fit the specific needs and goals of each client. 
                From brainstorming innovative solutions to providing detailed engineering designs, our team combines global expertise with local insights to deliver practical and sustainable outcomes.
            </ListItem>
            <ListItem title="Service Provider to Major EPC Firms">
               Collaboration is at the heart of everything we do at IFZINA. As a service provider to major EPC firms, we understand the importance of working together to achieve common goals.
                Whether it{"'"}s providing engineering support, procurement assistance, or project management services, we are committed to delivering added value and exceeding expectations every step of the way.
            </ListItem>
            <ListItem title=" Welding and Fabrications">
               Precision and quality are non-negotiable when it comes to welding and fabrications. 
               At IFZINA, we combine craftsmanship with cutting-edge technology to deliver superior results that stand the test of time. 
               From structural steel fabrication to custom metalwork, we take pride in our attention to detail and our commitment to excellence in every project we undertake.
            </ListItem>
            <ListItem title="Workshop Production">
            In our workshops, creativity meets craftsmanship to produce exceptional results. From machining and drilling to electroplating and press brakes, our skilled technicians and state-of-the-art equipment ensure that every component meets the highest standards of quality and performance. At IFZINA, we don{"'"}t just build – we create, innovate, and inspire.

            </ListItem>
            <div className='mt-8 justify-start items-start flex'>
               <a href="/services" className="flex justify-center items-center w-[100%] lg:w-72 bg-black-300 hover:bg-[#1c1c1e] h-[56px] my-[7px] tracking-tighter text-white cursor-pointer px-8 text-[14px]  rounded-[100px] uppercase">
                  Learn more ....
               </a>
            </div>
          </List>
          
        </div>

      </Container>
    </div>
  )
}

export default HomeServices

export function SectionIntro({
   title,
   eyebrow,
   children,
   smaller = false,
   invert = false,
   ...props
 }) {
   return (
     <Container {...props}>
       <FadeIn className="w-full">
         <h2>
           {eyebrow && (
             <>
               <span
                 className={clsx(
                   'mb-6 block font-display text-3xl text-center w-full border font-semibold',
                   invert ? 'text-white' : 'text-neutral-950',
                 )}
               >
                 {eyebrow}
               </span>
               <span className="sr-only"> - </span>
             </>
           )}
           <span
             className={clsx(
               'block font-display tracking-tight [text-wrap:balance]',
               smaller
                 ? 'text-2xl font-semibold'
                 : 'text-4xl font-medium sm:text-5xl',
               invert ? 'text-white' : 'text-neutral-950',
             )}
           >
             {title}
           </span>
         </h2>
         {children && (
           <div
             className={clsx(
               'mt-6 text-xl text-center',
               invert ? 'text-neutral-300' : 'text-neutral-600',
             )}
           >
             {children}
           </div>
         )}
       </FadeIn>
     </Container>
   )
 }
 