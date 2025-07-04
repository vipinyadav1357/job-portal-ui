import { Tabs } from '@mantine/core';
import {
    IconPhoto,
    IconBriefcase2Filled,
    IconUsers,
} from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import JobHistoryCard from './JobHistoryCard';
import { getAllJob } from '../../services/JobService';
import { useSelector } from 'react-redux';

const JobHistoryComponent = () => {
    const [activeTab, setActiveTab] = useState<string>('APPLIED');
    const [jobList, setJobList] = useState<any>([]);
    const [showList, setShowList] = useState<any>([]);
    const userProfile = useSelector((state: any) => state.profile);
    useEffect(() => {
        console.log('Active tab:', activeTab);
        getAllJob()
            .then((res) => {
                setJobList(res);
            }
            ).catch((err) => {
                console.error(err);
            });
    }, []);
    useEffect(() => {
        if (activeTab === 'APPLIED') {
            setActiveTabData(activeTab, jobList)
        } else if (activeTab === 'SAVED') {

            setShowList(jobList?.filter((job: any) =>
                userProfile?.savedJobs.includes(job.id)
            ))
        } else if (activeTab === 'OFFERED') {

            setActiveTabData(activeTab, jobList)

        } else if (activeTab === 'INTERVIEWING') {
            setActiveTabData(activeTab, jobList)

        }
    }, [activeTab, jobList, userProfile?.savedJobs]);

    const setActiveTabData = (activeTab: any, jobList: any) => {
        setShowList(jobList?.filter((job: any) => {
            let present = false;
            job?.applicants?.forEach((applicant: any) => {
                if (applicant.applicantId === 1 && applicant.applicationStatus === activeTab) {
                    present = true;
                }
            });
            return present;
        }))
    }

    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    return (
        <div className="w-fit">
            <div className="text-2xl font-semibold text-center mt-3">
                Jobs history
            </div>

            <Tabs value={activeTab} onTabChange={handleTabChange}>
                <Tabs.List className="mb-5 [&_button]:text-lg font-semibold [&_button[aria-selected=true]]:bg-bright-sun-400 [&_button[data-active=true]]:transition [&_button[data-active=true]]:duration-300 [&_button[data-active=true]]:ease-in-out flex gap-5 items-center">
                    <Tabs.Tab value="APPLIED" icon={<IconPhoto size={14} />}>
                        Applied
                    </Tabs.Tab>
                    <Tabs.Tab value="SAVED" icon={<IconBriefcase2Filled size={14} />}>
                        Saved
                    </Tabs.Tab>
                    <Tabs.Tab value="OFFERED" icon={<IconUsers size={14} />}>
                        Offered
                    </Tabs.Tab>
                    <Tabs.Tab value="INTERVIEWING" icon={<IconUsers size={14} />}>
                        Interviewing
                    </Tabs.Tab>
                </Tabs.List>

                {/* Panel for APPLIED */}
                <Tabs.Panel
                    value={activeTab}
                    pt="xs"
                    className="[&>div]:w-fit"
                >
                    <div className="flex flex-wrap gap-10 justify-center">
                        {showList?.map((job: any, index: any) => (
                            <div key={index}>
                                <JobHistoryCard {...job} {...{ [activeTab.toLowerCase()]: true }} />
                            </div>
                        ))}
                    </div>
                </Tabs.Panel>


            </Tabs>
        </div>
    );
};

export default JobHistoryComponent;
