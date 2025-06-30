import React, { } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CursorFollower from '../Animition/CursorAnimition/CursorFollower'
import ApplyJobsPage from '../pages/ApplyJobs/ApplyJobsPage'
import CompanyProfilePage from '../pages/CompanyProfile/CompanyProfilePage'
import HomePage from '../pages/HomePage/HomePage'
import JobHistoryPage from '../pages/JobHistory/JobHistoryPage'
import JobProfilePage from '../pages/JobProfile/JobProfilePage'
import PostedJobsPage from '../pages/PostedJobs/PostedJobsPage'
import SignUpPage from '../pages/SignUp/SignUpPage'
import TalentProfilePage from '../pages/TalentProfile/TalentProfilePage'
import UploadJobsPage from '../pages/UploadJobs/UploadJobsPage'
import UserProfilePage from '../pages/UserProfile/UserProfilePage'
import FindJob from '../pages/FindJob/FindJobPage';
import FindTalent from '../pages/FindTalent/FindTalentPage';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'

const AppRoutes = () => {

    const user = useSelector((state: any) => state.user);

    return (<BrowserRouter>
        <CursorFollower />
        <Header />
        <Routes>
            <Route path='/find-jobs' element={<FindJob />} />
            <Route path='/find-talent' element={<FindTalent />} />
            <Route path='/talent-profile' element={<TalentProfilePage />} />
            <Route path='/post-job' element={<UploadJobsPage />} />
            <Route path='/job-profile/:id' element={<JobProfilePage />} />
            <Route path='/apply-job/:id' element={<ApplyJobsPage />} />
            <Route path='/company-profile' element={<CompanyProfilePage />} />
            <Route path='/posted-job' element={<PostedJobsPage />} />
            <Route path='/job-history' element={<JobHistoryPage />} />
            <Route path='/sign-up' element={user ? <Navigate to={"/"} /> : <SignUpPage />} />
            <Route path='/log-in' element={user ? <Navigate to={"/"} /> : <SignUpPage />} />
            <Route path='/user-profile' element={<UserProfilePage />} />
            <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    )
}

export default AppRoutes;
