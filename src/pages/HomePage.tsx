import React from 'react'
import DreamJob from './landing-page/DreamJob';
import Companies from './landing-page/Companies';
import JobCategories from './landing-page/JobCategories';
import Working from './landing-page/Working';
import Testimonials from './landing-page/Testimonials';
import Subscribe from './landing-page/Subscribe';

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']" >
      <DreamJob />
      <Companies />
      <JobCategories />
      <Working />
      <Testimonials />
      <Subscribe />
    </div >
  );
}

export default HomePage