'use client'

import { Suspense } from 'react'
import SettingsPageContent from './SettingsPage'

const SettingsPage = () => {
    return (
        <Suspense fallback={null}>
            <SettingsPageContent />
        </Suspense>
    )
}

export default SettingsPage