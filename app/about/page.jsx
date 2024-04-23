
import React from 'react';
import Banner from '@/components/Banner/Banner';
import CompanyOverview from '../../components/CompanyOverview/CompanyOverview';
import MissionAndValues from '../../components/MissionAndValues/MissionAndValues';
import TeamMembers from '../../components/TeamMembers/TeamMembers';
import CompanyHistory from '../../components/CompanyHistory/CompanyHistory';

const AboutPage = () => {
  return (
    <div>
      <Banner
        first={
          <h1 className="text-6xl sm:text-3xl font-semibold text-center my-8">About Us</h1>
        }
      />

      <CompanyOverview />
      <MissionAndValues />
      <TeamMembers />
      <CompanyHistory />
    </div>
  );
};

export default AboutPage;
