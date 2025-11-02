'use client'

import Logout from './Logout';
import { useState } from 'react';
import Card from '@components/Card'
import EditProfile from './EditProfile';
import Notifications from './Notifications';
import PrivacyPolicy from './Privacy-policy';
import SettingsLink from '@components/SettingsLink'

type settingsSlider = 'edit-profile' | 'privacy-policy' | 'notifications' | 'logout'

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState<settingsSlider>('edit-profile');

    const renderContent = () => {
        switch (activeTab) {
            case 'edit-profile':
                return <EditProfile/>
            case 'privacy-policy':
                return <PrivacyPolicy/>
            case 'notifications':
                return <Notifications/>
            case 'logout':
                return <Logout/>
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
                    onClick={() => setActiveTab('edit-profile')}
                />
                <SettingsLink
                    label='Privacy Policy'
                    active={activeTab === 'privacy-policy'}
                    onClick={() => setActiveTab('privacy-policy')}
                />
                <SettingsLink
                    label='Notifications'
                    active={activeTab === 'notifications'}
                    onClick={() => setActiveTab('notifications')}
                />
                <SettingsLink
                    label='Logout'
                    active={activeTab === 'logout'}
                    onClick={() => setActiveTab('logout')}
                />
            </div>

            {renderContent()}
        </Card>
    )
}

export default SettingsPage