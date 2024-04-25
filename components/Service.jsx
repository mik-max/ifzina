/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Banner from './Banner/Banner'


const Service = () => {
  return (
     <div>
     <Banner
       first={
         <h1 className="text-3xl md:text-6xl  font-semibold text-center my-8">
           Our Services
         </h1>
       }
       bgImage={"bg-about-bg"}
     />

     <main className="flex flex-col md:gap-10 gap-5 mt-5">
       <section className="flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
         <div className="w-[100%] md:w-[50%] pt-5">
           <h2 className="font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]">
             Engineering Design and Consultation
           </h2>
           <p className="text-[15px] font-[500] text-[#56616B] leading-6">
             At IFZINA, we believe that every project is unique and deserves a
             tailored approach. Our engineering design and consultation
             services are crafted to fit the specific needs and goals of each
             client. From brainstorming innovative solutions to providing
             detailed engineering designs, our team combines global expertise
             with local insights to deliver practical and sustainable outcomes.
           </p>
         </div>
         <div className="w-[100%] md:w-[50%]">
           <img src="/images/consult.jpg" alt="" className="rounded-md" />
         </div>
       </section>
       <section className="flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
         <div className="w-[100%] md:w-[50%]">
           <img src="/images/supply.jpg" alt="" className="rounded-md" />
         </div>
         <div className="w-[100%] md:w-[50%] pt-5">
           <h2 className="font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]">
             Procurement and Supply Chain Management
           </h2>
           <p className="text-[15px] font-[500] text-[#56616B] leading-6">
             Navigating the complexities of procurement and supply chain
             management requires agility and foresight. At IFZINA, we pride
             ourselves on our ability to optimize processes, minimize risks,
             and maximize value for our clients. With a hands-on approach and a
             network of trusted partners, we ensure that every procurement
             decision contributes to the success of the project.
           </p>
         </div>
       </section>
       <section className="flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
         <div className="w-[100%] md:w-[50%] pt-5">
           <h2 className="font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]">
             Construction and Project Management
           </h2>
           <p className="text-[15px] font-[500] text-[#56616B] leading-6">
             {`  Building something great requires more than just bricks and mortar
             – it requires vision, leadership, and attention to detail. At
             IFZINA, we approach construction and project management with a
             focus on safety, quality, and efficiency. Our experienced team
             oversees every aspect of the project, from planning and scheduling
             to execution and commissioning, to ensure that our clients' vision
             becomes a reality.`}
           </p>
         </div>
         <div className="w-[100%] md:w-[50%]">
           <img src="/images/construction.jpg" alt="" className="rounded-md" />
         </div>
       </section>
       <section className="flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
         <div className="w-[100%] md:w-[50%]">
           <img src="/images/turnkey.jpg" alt="" className="rounded-md" />
         </div>
         <div className="w-[100%] md:w-[50%] pt-5">
           <h2 className="font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]">
             {" "}
             Turnkey Solutions for EPC Projects
           </h2>
           <p className="text-[15px] font-[500] text-[#56616B] leading-6">
             When it comes to turnkey solutions for EPC projects, IFZINA is
             your trusted partner from start to finish. We take pride in our
             ability to seamlessly integrate engineering, procurement, and
             construction services to deliver fully integrated solutions that
             exceed expectations. With a commitment to excellence and a passion
             for innovation, we turn challenges into opportunities and dreams
             into reality.
           </p>
         </div>
       </section>
       <section className="flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
         <div className="w-[100%] md:w-[50%] pt-5">
           <h2 className="font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]">
             Service Provider to Major EPC Firms
           </h2>
           <p className="text-[15px] font-[500] text-[#56616B] leading-6">
             {`Collaboration is at the heart of everything we do at IFZINA. As a
             service provider to major EPC firms, we understand the importance
             of working together to achieve common goals. Whether it's
             providing engineering support, procurement assistance, or project
             management services, we are committed to delivering added value
             and exceeding expectations every step of the way.`}
           </p>
         </div>
         <div className="w-[100%] md:w-[50%]">
           <img
             src="/images/serviceProvider.jpg"
             alt=""
             className="rounded-md"
           />
         </div>
       </section>
       <section className="flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
         <div className="w-[100%] md:w-[50%]">
           <img src="/images/welding.jpg" alt="" className="rounded-md" />
         </div>
         <div className="w-[100%] md:w-[50%] pt-5">
           <h2 className="font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]">
             Welding and Fabrications
           </h2>
           <p className="text-[15px] font-[500] text-[#56616B] leading-6">
             Precision and quality are non-negotiable when it comes to welding
             and fabrications. At IFZINA, we combine craftsmanship with
             cutting-edge technology to deliver superior results that stand the
             test of time. From structural steel fabrication to custom
             metalwork, we take pride in our attention to detail and our
             commitment to excellence in every project we undertake.
           </p>
         </div>
       </section>
       <section className="flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
         <div className="w-[100%] md:w-[50%] pt-5">
           <h2 className="font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]">
             Workshop Production
           </h2>
           <p className="text-[15px] font-[500] text-[#56616B] leading-6">
             {`  In our workshops, creativity meets craftsmanship to produce
             exceptional results. From machining and drilling to electroplating
             and press brakes, our skilled technicians and state-of-the-art
             equipment ensure that every component meets the highest standards
             of quality and performance. At IFZINA, we don't just build – we
             create, innovate, and inspire.`}
           </p>
         </div>
         <div className="w-[100%] md:w-[50%]">
           <img src="/images/workshop.jpg" alt="" className="rounded-md" />
         </div>
       </section>
       <section className="flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]">
         <div className="w-[100%] md:w-[50%]">
           <img src="/images/training.jpg" alt="" className="rounded-md" />
         </div>
         <div className="w-[100%] md:w-[50%] pt-5">
           <h2 className="font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]">
             Training at IFZINA
           </h2>
           <p className="text-[15px] font-[500] text-[#56616B] mb-[10px] leading-6">
             {`At IFZINA, we believe in the power of knowledge and continuous
             learning. That's why we offer comprehensive training programs
             designed to equip individuals and organizations with the skills
             and expertise needed to succeed in the ever-evolving field of
             engineering, procurement, and construction (EPC).`}
           </p>
           <p className="text-[15px] font-[500] text-[#56616B] mb-[10px] leading-6">
             Our training programs cover a wide range of topics, including
             engineering principles, project management techniques, procurement
             best practices, safety protocols, and more. Led by experienced
             industry professionals, our courses combine theoretical knowledge
             with practical hands-on exercises to ensure that participants gain
             valuable insights and practical skills that can be applied in
             real-world scenarios.
           </p>
           <p className="text-[15px] font-[500] text-[#56616B] mb-[10px] leading-6">
             {`Whether you're looking to upskill your existing workforce, onboard
             new team members, or stay ahead of the curve with the latest
             industry trends, IFZINA's training programs offer a flexible and
             customizable solution to meet your needs. We can tailor our
             training sessions to align with your specific requirements,
             schedule, and budget, ensuring that you get the most out of your
             investment in professional development.`}
           </p>
           <p className="text-[15px] font-[500] text-[#56616B] mb-[10px] leading-6">
             {` By investing in training at IFZINA, you're not just investing in
             your team – you're investing in the future success and
             sustainability of your organization. Our goal is to empower
             individuals and organizations with the knowledge and skills they
             need to thrive in a rapidly changing world, and we're committed to
             providing world-class training experiences that deliver tangible
             results.`}
           </p>
           <p className="text-[15px] font-[500] text-[#56616B] mb-[10px] leading-6">
             {`Join us at IFZINA and take your skills to the next level. Contact
             us today to learn more about our training programs and how we can
             help you achieve your professional development goals. Absolutely!
             Let's craft a compelling Career page for IFZINA, drawing
             inspiration from industry leaders like Fluor and Atkins while
             infusing it with IFZINA's unique tone and style`}
           </p>
         </div>
       </section>
     </main>
   </div>
  )
}

export default Service