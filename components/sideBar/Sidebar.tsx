'use client'

import Image from 'next/image'
import { useState } from 'react'
import SidebarTile from './SidebarTile'

const Sidebar = () => {
    const [tileIndex, setTileIndex] = useState<number>(0)
    const activeIndexes = Array(7).fill(false).map((_, i) => i === tileIndex)

    const handleClicked = (selectedTileIndex: number) => {
        setTileIndex(selectedTileIndex)
    }

    return (
        <aside className='sideBar'>
            <div className='mt-[2.3125rem] flex gap-x-[0.375rem] items-center mb-[2.6875rem] ml-[1.28375rem]'>
                <Image
                    width={37}
                    height={35}
                    alt='company_logo'
                    src='/svgs/sidebar/mortar.svg'
                />
                <h1 className='text-xl text-black font-normal'>
                    AI PHARMACY
                </h1>
            </div>

            <p className='text-sm leading-[1.125rem] font-normal ml-4 mb-[0.625rem] text-sideBarGrey'>Home</p>
            <nav className='flex flex-col gap-y-[1.25rem] ml-1'>
                <SidebarTile icon='/svgs/sidebar/dashboard.svg' text='Overview' active={activeIndexes[0]} href='/' onClick={() => handleClicked(0)} />
                <SidebarTile
                    text='Inventory'
                    active={activeIndexes[1]}
                    onClick={() => handleClicked(1)}
                    icon='/svgs/sidebar/inventory.svg'
                    dropdownArrow='/svgs/sidebar/dropdown.svg'
                    dropdownItems={['Database', 'Statistics', 'Pending Approvals']}
                    dropdownLinks={['/database', '/', '/']}
                />
                <SidebarTile icon='/svgs/sidebar/upload.svg' text='Upload' active={activeIndexes[2]} href='/upload' onClick={() => handleClicked(2)} />
                <SidebarTile icon='/svgs/sidebar/team.svg' text='Team' active={activeIndexes[3]} href='/team' onClick={() => handleClicked(3)}/>
            </nav>

            <p className='text-sm leading-[1.125rem] font-normal ml-4 mb-[0.625rem] text-sideBarGrey mt-[1.5rem]'>Preferences</p>
            <nav className='flex flex-col gap-y-[1.25rem] ml-1'>
                <SidebarTile
                    text='Settings'
                    active={activeIndexes[4]}
                    onClick={() => handleClicked(4)}
                    icon='/svgs/sidebar/settings.svg'
                    dropdownArrow='/svgs/sidebar/dropdown.svg'
                    dropdownItems={['Edit Profile', 'Privacy Policy', 'Notifications', 'Logout']}
                    dropdownLinks={['/settings', '/settings?tab=privacy-policy', '/settings?tab=notifications', '/settings?tab=logout']}
                />
                <SidebarTile icon='/svgs/sidebar/about.svg' text='About' active={activeIndexes[5]} href='' onClick={() => handleClicked(5)}/>
                <SidebarTile icon='/svgs/sidebar/help.svg' text='Help' active={activeIndexes[6]} href='' onClick={() => handleClicked(6)}/>
            </nav>
        </aside>
    )
}

export default Sidebar