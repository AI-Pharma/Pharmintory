'use client'

import Image from 'next/image'
import { useState } from 'react'
import RootNavLink from './RootNavLinks'
import Link from '@node_modules/next/link'

const RootNav = () => {

    const [activeLink, setActiveLink] = useState('home')
    const linkSet = [
        { id: 'home', label: 'Home' },
        { id: 'features', label: 'Features' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'about', label: 'About' },
    ]
    return (
        <nav className='rootNav'>
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

            <div className='flex gap-[1.875rem]'>
                {linkSet.map((link) => (
                    <RootNavLink
                        key={link.id}
                        label={link.label}
                        href={`/${link.id}`}
                        active={ activeLink === link.id}
                        onClick={() => setActiveLink}
                    />
                ))}
            </div>

            <div className='flex gap-[.9375rem]'>
                <Link
                    href='/login'
                    className='loginButton urbanist-font'
                >
                    Sign In
                </Link>
                <Link
                    href='/signup'
                    className='signUpButton urbanist-font'
                >
                    Sign Up
                </Link>
            </div>
        </nav>
    )
}

export default RootNav