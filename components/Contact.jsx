"use client"
import React from 'react'
import Banner from '@/components/Banner/Banner'
import { useId, useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import emailjs from "@emailjs/browser"
import { Border } from '@/components/Border'
// import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'
import { Snackbar } from '@mui/material'
import {motion} from 'framer-motion'



function TextInput({ label, ...props }) {
   let id = useId()
 
   return (
     <div className="group relative z-0 transition-all  focus-within:z-10">
       <input
         type="text"
         id={id}
         {...props}
         placeholder=" "
         className="peer block w-full border-b-2 border-neutral-300 bg-transparent pl-1 pr-6 pb-4 pt-12 text-base/6 text-neutral-950 transition focus:border-neutral-950 focus:outline-none"
       />
       <label
         htmlFor={id}
         className="pointer-events-none absolute left- top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-600"
       >
         {label}
       </label>
     </div>
   )
 }
function TextArea({ label, placeholder, ...props }) {
   let id = useId()
  
   return (
     <div className="group relative z-0 transition-all focus-within:z-10">
       <textarea
         type="text"
         rows="16"
         
         id={id}
         {...props}
         placeholder={placeholder}
         className="peer block w-full lg:border-l-2 border-neutral-300 bg-transparent px-6 pb-4 pt-16 text-base/6 text-neutral-950  transition focus:border-neutral-400 focus:outline-none placeholder:text-neutral-950 h-72 md:h-auto  "
       />
       <label
         htmlFor={id}
         className="pointer-events-none absolute left-6 top-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-100 w-full h-12 flex items-center  bg-white z-10 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-600"
       >
         {label}
       </label>
     </div>
   )
 }
 
 function ContactForm() {
   const form = useRef();
   const [open, setOpen] = React.useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jvy8jxg', 'template_ej15ayr', form.current, 'HdCcNBZnVuXwkpDeS')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }
  const [email, setEmail] = useState('')
  
  useEffect(() => {
     const storedValue = localStorage.getItem("inputValue");
      if (storedValue) {
        setEmail(storedValue);
      }else{ setEmail('not set yet');}
      // console.log(email)
  }, []);
   return (
     <div className="lg:order-las borde w-full">
       <form ref={form} onSubmit={handleSubmit}>
         
         <div className="isolate mt-6 flex  w-full borde flex-col gap-x-8 gap-y-10 lg:flex-row  -space-y-px  bg-white/50">
            <motion.div initial={{ opacity: 0, y:100 }} whileInView={{opacity: 1, y:0 }}   transition={{ ease: "easeInOut",  duration: 1 }} viewport={{once:true}} className="lg:w-[40%] w-full lg:pl-10 pl-0 lg:pr-4 pr-0  ">
                <div className="w-[100%]  ">
                      <h2 className="font-display  text-3xl md:text-6xl font-semibold text-neutral-950">
                        Write Us
                      </h2>
                      <div className="mt-10 h-1 w-28 bg-[#C90]"/>
                      <TextInput label="Name" name="from_name" autoComplete="name" />
                      <TextInput
                        label="Email"
                        type="email"
                        name="from_email"
                        autoComplete="email"
                        value={email}
                      />
                      <TextInput
                        label="Subject"
                        name="subject"
                        autoComplete="organization"
                      />
                </div>
            </motion.div>
            <motion.div  initial={{ opacity: 0 , x:100}} whileInView={{ opacity: 1, x:0 }}  transition={{ ease: "easeInOut",  duration: 1 }} viewport={{once: true}}   className="lg:w-[60%] w-full">
              <TextArea label="Message" name="message" placeholder="Write text here..." />
              <button type='submit' value="send" className=' mt justify-start w-full items-start flex'>
                  <span className="flex justify-center items-center w-[100%]  bg-black-300 hover:bg-[#1c1c1e] h-[56px] my-[px] tracking-tight text-white cursor-pointer px-8 text-[14px] font-semibold text-lg uppercase">
                    Send Message
                  </span>
              </button>
            </motion.div>
         </div>
       </form>
       <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
     </div>
   )
 }
 
 function ContactDetails() {
   return (
     <div>
       <h2 className="font-display text-base font-semibold text-neutral-950">
         Our offices
       </h2>
       <p className="mt-6 text-base text-neutral-600">
         Prefer doing things in person? Here is our
         address.
       </p>
 
       <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
 
       <Border className="mt-16 pt-16">
         <h2 className="font-display text-base font-semibold text-neutral-950">
           Email us
         </h2>
         <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
           {[
             ['Careers', 'careers@studioagency.com'],
             ['Press', 'press@studioagency.com'],
           ].map(([label, email]) => (
             <div key={email}>
               <dt className="font-semibold text-neutral-950">{label}</dt>
               <dd>
                 <Link
                   href={`mailto:${email}`}
                   className="text-neutral-600 hover:text-neutral-950"
                 >
                   {email}
                 </Link>
               </dd>
             </div>
           ))}
         </dl>
       </Border>
 
       <Border className="mt-16 pt-16">
         <h2 className="font-display text-base font-semibold text-neutral-950">
           Follow us
         </h2>
         <SocialMedia className="mt-6" />
       </Border>
     </div>
   )
 }

function Contact() {
  return (
    <div>
       <Banner
        first={
          <h1 className="text-3xl md:text-6xl  font-semibold text-center my-8">Contact Us</h1>
        }
        bgImage={'bg-about-bg'}
      />

      <Container className="mt-24 mx-16 sm:mt-32 lg:mt-36 mb-24">
        <div className="gri  w-full borde flex-col flex grid-cols- gap-x-8 gap-y-24 lg:grid-cols-">
          <ContactForm />
          {/* <ContactDetails /> */}
        </div>
      </Container>
    </div>
  )
}

export default Contact