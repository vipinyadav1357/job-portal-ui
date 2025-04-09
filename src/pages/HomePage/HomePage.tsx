import React from 'react'
import Companies from './landing-page/Companies';
import DreamJob from './landing-page/DreamJob';
import JobCategories from './landing-page/JobCategories';
import Subscribe from './landing-page/Subscribe';
import Testimonials from './landing-page/Testimonials';
import Working from './landing-page/Working';

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