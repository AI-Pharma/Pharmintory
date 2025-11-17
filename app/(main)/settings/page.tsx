'use client'

import Logout from './Logout';
import Card from '@components/Card'
import EditProfile from './EditProfile'
import { useState, useEffect } from 'react'
import Notifications from './Notifications'
import PrivacyPolicy from './Privacy-policy'
import SettingsLink from '@components/SettingsLink'
import { useSearchParams, useRouter } from 'next/navigation'

type settingsSlider = 'edit-profile' | 'privacy-policy' | 'notifications' | 'logout'

const SettingsPage = () => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const tab = searchParams.get('tab')

    const [activeTab, setActiveTab] = useState<settingsSlider>(
        (tab as settingsSlider) || 'edit-profile'
    );

    useEffect(() => {
        const urlTab = tab as settingsSlider;
        const validTabs: settingsSlider[] = ['edit-profile', 'privacy-policy', 'notifications', 'logout'];

        if (urlTab && validTabs.includes(urlTab)) {
            setActiveTab(urlTab);
        }
    }, [tab]);

    const handleTabClick = (newTab: settingsSlider) => {
        setActiveTab(newTab);
        const params = new URLSearchParams(searchParams.toString());
        params.set('tab', newTab);
        router.push(`/settings?${params.toString()}`, { scroll: false });
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'edit-profile':
                return <EditProfile />
            case 'privacy-policy':
                return <PrivacyPolicy />
            case 'notifications':
                return <Notifications />
            case 'logout':
                return <Logout />
            default:
                return null;
        }
    };

    return (
        <Card className='pt-[2.3125rem] pl-[1.875rem] mx-[8.5625rem] mt-[5.9375rem]'>
            <div className='flex gap-[3.5625rem] ml-[1.875rem] mb-[5.9375rem] justify-start max-w-[69.375rem]'>
                <SettingsLink
                    label='Edit Profile'
                    active={activeTab === 'edit-profile'}
                    onClick={() => handleTabClick('edit-profile')}
                />
                <SettingsLink
                    label='Privacy Policy'
                    active={activeTab === 'privacy-policy'}
                    onClick={() => handleTabClick('privacy-policy')}
                />
                <SettingsLink
                    label='Notifications'
                    active={activeTab === 'notifications'}
                    onClick={() => handleTabClick('notifications')}
                />
                <SettingsLink
                    label='Logout'
                    active={activeTab === 'logout'}
                    onClick={() => handleTabClick('logout')}
                />
            </div>

            {renderContent()}
        </Card>
    )
}

export default SettingsPage