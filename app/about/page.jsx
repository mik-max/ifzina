/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import About from '@/components/About';


export const metadata = {
     title: "About IFZINA: Premier EPC Partner in Nigeria | Engineering, Procurement, and Construction, Maintenance",
     description: "Learn about IFZINA, a leading EPC company in Nigeria, offering comprehensive engineering, procurement, and construction services. Discover our mission, values, portfolio, and client testimonials.",
     keywords:"EPC company, engineering services, Nigeria, sustainable solutions, renewable energy, solar, wind energy, building services, maintenance"
};
const AboutPage = () => {
  return (
     <div>
          <About/>
    </div>
  );
};

export default AboutPage;
