import React from 'react'
import Header from '../Header/Header';
import DreamJob from './landing-page/DreamJob';
import Companies from './landing-page/Companies';
import JobCategories from './landing-page/JobCategories';

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']" >
      <Header />
      <DreamJob />
      <Companies />
      <JobCategories />
    </div >
  );
}

export default HomePage