/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Banner from '@/components/Banner/Banner';

const Page = () => {
     return (
          <div>
      <Banner
        first={
          <h1 className="text-3xl md:text-6xl  font-semibold text-center my-8">Markets</h1>
        }
        bgImage={'bg-market-bg'}
      />

      <main className='flex flex-col md:gap-10 gap-5 mt-5'>
         
      <section className='flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'>
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/oil.jpg" alt="" className='rounded-md' />
          </div>
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Oil and Gas</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>IFZINA brings global expertise and local insight to Nigeria's thriving oil and gas industry. With our comprehensive EPC services, we support projects across the upstream, midstream, and downstream sectors, contributing to the exploration, production, transportation, refining, and distribution of Nigeria's abundant oil and gas resources.</p>
          </div>
      </section>
      <section className='flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Power Generation and Distribution</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>As Nigeria strives to meet its growing demand for electricity, IFZINA plays a vital role in the development of power generation plants, transmission infrastructure, and distribution networks. Leveraging our expertise in EPC, we empower communities with access to reliable and sustainable energy solutions, driving economic growth and development.</p>
          </div>
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/power.jpg" alt="" className='rounded-md' />
          </div>
      </section>
      <section className='flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/infrastructure.jpg" alt="" className='rounded-md' />
          </div>
          
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'> Infrastructure Development</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>IFZINA is at the forefront of infrastructure development in Nigeria, delivering innovative solutions for roads, bridges, railways, airports, seaports, and urban infrastructure. With a focus on connectivity and economic growth, we enhance the quality of life for communities across the country through our comprehensive EPC services. </p>
          </div>
      </section>
      <section className='flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Renewable Energy</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>With a commitment to sustainability, IFZINA pioneers the development of renewable energy projects in Nigeria, including solar, wind, hydroelectric, and other clean energy solutions. By harnessing the power of renewable resources, we drive environmental stewardship and energy independence for future generations.</p>
          </div>
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/renewable-energy.jpg" alt="" className='rounded-md' />
          </div>
      </section>
      <section className='flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/team.jpg" alt="" className='rounded-md' />
          </div>
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Telecommunications</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>IFZINA supports Nigeria's telecommunications sector with cutting-edge EPC solutions for tower construction, fiber optic networks, and data centers. Our expertise in telecom infrastructure enables seamless connectivity and empowers individuals and businesses with access to mobile and internet services.</p>
          </div>
          
      </section>
      <section className='flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Water and Sanitation</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>IFZINA addresses Nigeria's water and sanitation challenges through the construction of water supply systems, treatment plants, sewage networks, and wastewater management facilities. With a focus on sustainability and public health, we improve access to clean water and sanitation for communities nationwide.</p>
          </div>
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/price2.jpg" alt="" className='rounded-md' />
          </div>
      </section>
      <section className='flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/profile.jpg" alt="" className='rounded-md' />
          </div>
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Mining and Minerals</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>IFZINA provides comprehensive EPC services for the development of mining infrastructure in Nigeria, including mine construction, processing plants, and transportation networks. With our expertise, we unlock the potential of Nigeria's abundant mineral resources, driving economic growth and industrial development.</p>
          </div>
          
      </section>
      
      <section className='flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Manufacturing and Industrial Facilities</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>IFZINA supports Nigeria's manufacturing sector with state-of-the-art industrial facilities, factories, warehouses, and industrial parks. Through our EPC services, we facilitate economic diversification and industrialization, creating opportunities for growth and prosperity.</p>
          </div>

          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/diversity.jpg" alt="" className='rounded-md' />
          </div>
         
      </section>
      <section className='flex flex-col md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          
          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/ethics.jpg" alt="" className='rounded-md' />
          </div>
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Agriculture and Agribusiness</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>IFZINA contributes to Nigeria's agricultural sector with infrastructure development for irrigation systems, storage facilities, and processing plants. By enhancing agricultural productivity and value chain efficiency, we support food security and economic development in rural communities.</p>
          </div>
          
      </section>

      <section className='flex flex-col-reverse md:flex-row w-full justify-between lg:gap-24 md:gap-10 gap-5 lg:px-[100px] px-[25px] py-[25px] lg:py-[50px]'  >
          <div className='w-[100%] md:w-[50%] pt-5'>
               <h1 className='font-bold text-[#131316] md:text-4xl text-xl md:mb-[24px] mb-[10px]'>Healthcare and Education</h1>
               <p className='text-[15px] font-[500] text-[#56616B] leading-6'>IFZINA builds critical infrastructure for Nigeria's healthcare and education sectors, including hospitals, clinics, schools, and educational institutions. With a focus on accessibility and quality, we improve public services and promote social development and well-being.</p>
          </div>

          <div className='w-[100%] md:w-[50%]'>
               <img src="/images/diversity.jpg" alt="" className='rounded-md' />
          </div>
         
      </section>

      </main>

    </div>
     )
}

export default Page