/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Market from '@/components/Market';



export const metadata = {
     title: "Markets | IFZINA - Engineering, Procurement, Construction and Maintenance Services in Nigeria",
     description: "Explore the diverse markets served by IFZINA, including oil and gas, power generation, infrastructure, renewable energy, telecommunications, and more. Discover our expertise and capabilities.",
     keywords:"EPC company, renewable energy projects, solar solutions, wind energy projects, building services, maintenance services"
};

const Page = () => {

     return (
          <div>
               <Market/>
          </div>
     )
}

export default Page