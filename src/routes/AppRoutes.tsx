import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
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
import ProtectedRoutes from './ProtectedRoutes'
import PublicRoutes from './PublicRoutes'

const AppRoutes = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handler = () => {
            navigate("/log-in");
        };
        window.addEventListener("unauthorized", handler);
        return () => window.removeEventListener("unauthorized", handler);
    }, [navigate]);

    const user = useSelector((state: any) => state.user);

    return (<>
        <CursorFollower />
        <Header />
        <Routes >
            <Route path='/find-jobs' element={<ProtectedRoutes assignedRole={["EMPLOYER", "APPLICANT"]}><FindJob /></ProtectedRoutes>} />
            <Route path='/find-talent' element={<ProtectedRoutes assignedRole={["EMPLOYER", "APPLICANT"]}><FindTalent /></ProtectedRoutes>} />
            <Route path='/talent-profile/:id' element={<ProtectedRoutes assignedRole={["EMPLOYER", "APPLICANT"]}><TalentProfilePage /></ProtectedRoutes>} />
            <Route path='/post-job/:id' element={<ProtectedRoutes assignedRole={["EMPLOYER"]}><UploadJobsPage /></ProtectedRoutes>} />
            <Route path='/job-profile/:id' element={<ProtectedRoutes assignedRole={["EMPLOYER", "APPLICANT"]}><JobProfilePage /></ProtectedRoutes>} />
            <Route path='/apply-job/:id' element={<ProtectedRoutes assignedRole={["APPLICANT"]}><ApplyJobsPage /></ProtectedRoutes>} />
            <Route path='/company-profile' element={<ProtectedRoutes assignedRole={["EMPLOYER", "APPLICANT"]}><CompanyProfilePage /></ProtectedRoutes>} />
            <Route path='/posted-job/:id' element={<ProtectedRoutes assignedRole={["EMPLOYER"]}><PostedJobsPage /></ProtectedRoutes>} />
            <Route path='/job-history' element={<ProtectedRoutes assignedRole={["APPLICANT"]}><JobHistoryPage /></ProtectedRoutes>} />
            <Route path='/sign-up' element={<PublicRoutes><SignUpPage /></PublicRoutes>} />
            <Route path='/log-in' element={<PublicRoutes><SignUpPage /></PublicRoutes>} />
            <Route path='/user-profile' element={<UserProfilePage />} />
            <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer />
    </>
    )
}

export default AppRoutes;
