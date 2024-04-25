"use client"
import React from 'react'
import Banner from '@/components/Banner/Banner'
import { useId, useRef } from 'react'
import Link from 'next/link'
import emailjs from "@emailjs/browser"
import { Border } from '@/components/Border'
// import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'
import { Snackbar } from '@mui/material'
function TextInput({ label, ...props }) {
   let id = useId()
 
   return (
     <div className="group relative z-0 transition-all focus-within:z-10">
       <input
         type="text"
         id={id}
         {...props}
         placeholder=" "
         className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
       />
       <label
         htmlFor={id}
         className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
       >
         {label}
       </label>
     </div>
   )
 }
function TextArea({ label, ...props }) {
   let id = useId()
 
   return (
     <div className="group relative z-0 transition-all focus-within:z-10">
       <textarea
         type="text"
         // rows="4"
         id={id}
         {...props}
         placeholder=" "
         className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
       />
       <label
         htmlFor={id}
         className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
       >
         {label}
       </label>
     </div>
   )
 }
 
 function RadioInput({ label, ...props }) {
   return (
     <label className="flex gap-x-3">
       <input
         type="radio"
         {...props}
         className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
       />
       <span className="text-base/6 text-neutral-950">{label}</span>
     </label>
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
   return (
     <FadeIn className="lg:order-last">
       <form ref={form} onSubmit={handleSubmit}>
         <h2 className="font-display text-base font-semibold text-neutral-950">
           Send a message
         </h2>
         <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
           <TextInput label="Name" name="from_name" autoComplete="name" />
           <TextInput
             label="Email"
             type="email"
             name="from_email"
             autoComplete="email"
           />
           <TextInput
             label="Subject"
             name="subject"
             autoComplete="organization"
           />
           {/* <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" /> */}
           <TextArea label="Message" name="message" />
           {/* <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
             <fieldset>
               <legend className="text-base/6 text-neutral-500">Budget</legend>
               <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                 <RadioInput label="$25K – $50K" name="budget" value="25" />
                 <RadioInput label="$50K – $100K" name="budget" value="50" />
                 <RadioInput label="$100K – $150K" name="budget" value="100" />
                 <RadioInput label="More than $150K" name="budget" value="150" />
               </div>
             </fieldset>
           </div> */}
         </div>
         {/* <Button type="submit" className="mt-10">
           Let’s work together
         </Button> */}
          <button type='submit' value="send" className=' justify-start items-start flex'>
               <span className="flex justify-center items-center w-[100%] lg:w-72 bg-black-300 hover:bg-[#1c1c1e] h-[56px] my-[7px] tracking-tighter text-white cursor-pointer px-8 text-[14px]  rounded-[100px] uppercase">Send Message</span>
          </button>
       </form>
       <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
     </FadeIn>
   )
 }
 
 function ContactDetails() {
   return (
     <FadeIn>
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
     </FadeIn>
   )
 }

function contact() {
  return (
    <div>
       <Banner
        first={
          <h1 className="text-3xl md:text-6xl  font-semibold text-center my-8">Contact Us</h1>
        }
        bgImage={'bg-about-bg'}
      />

      <Container className="mt-24 sm:mt-32 lg:mt-40 mb-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </div>
  )
}

export default contact