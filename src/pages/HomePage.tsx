import React from 'react'
import Header from '../Header/Header';
import DreamJob from './landing-page/DreamJob';

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']" >
      <Header />
      <DreamJob />
    </div >
  );
}

export default HomePage