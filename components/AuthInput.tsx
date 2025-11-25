'use client'

import Image from 'next/image'
import { useState } from "react"

interface AuthInputProps {
    label: string
    hintText?: string
    required: boolean
    options?: PharmacyProperties[]
}

export interface PharmacyProperties {
    name: string
    region: string
    location: string
}

const AuthInput: React.FC<AuthInputProps> = ({ label, hintText, required }) => {
    const [inputText, setInputText] = useState<string>()
    return (
        <div className='flex flex-col gap-[13px] w-[25.625rem] mb-[1.5625rem]'>
            <p className='text-authTitleColor text-sm font-medium leading-[14px] tracking-[-0.28px]'>{label}<span className='text-cyanText'>{required && '*'}</span></p>
            <div className='flex items-center border rounded-2xl border-[#E0E5F2] h-[3.125rem]'>
                <input
                    type='text'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={hintText}
                    className='pl-[1.5rem] w-full border-none focus:outline-none focus:ring-0'
                />
            </div>
        </div>
    )
}

export default AuthInput

export const AuthPharmaDropdownInput: React.FC<AuthInputProps> = ({ label, required, options }) => {
    const [activated, setActivated] = useState(false)
    const [inputText, setInputText] = useState<string>()
    const [selectedString, setSelectedString] = useState<string | null>(null)
    return (
        <div className='flex flex-col gap-[13px] w-[25.625rem] mb-[1.5625rem]'>
            <p className='text-authTitleColor text-sm font-medium leading-[14px] tracking-[-0.28px]'>{label}<span className='text-cyanText'>{required && '*'}</span></p>
            <div
                onClick={() => setActivated(!activated)}
                className='h-[3.125rem] rounded-2xl border border-[#E0E5F2] flex items-center py-[.5rem] px-[1rem] active:border-cyanText justify-between'
            >
                {selectedString ?? 'ABBA Chemists Ltd'}
                <Image
                    src='/svgs/auth_dropdown.svg'
                    width={24}
                    height={24}
                    alt='dropdown arrow for selecting from a list of options'
                    className={`${activated && 'rotate-180'}`}
                />
            </div>
            <div className={`flex-col w-[51.125rem] bg-white rounded-2xl pt-[16px] px-[24px] mt-[14px] ${activated ? 'flex' : 'hidden'} w-[26.25rem] shadow-xl`}>
                <span className='capitalize mb-[1.7188rem] text-[#6C757D] text-[.9375rem] font-semibold'>Available pharmacies</span>
                <div className='my-[.75rem] h-[3rem] rounded-[.5rem] border border-[#00000066] flex items-center py-[.5rem] px-[1rem] active:border-cyanText justify-between'>
                    <input
                        value={inputText}
                        placeholder='Search'
                        onChange={(e) => setInputText(e.target.value)}
                        className='w-full border-none focus:outline-none focus:ring-0'
                    />
                </div>
                <table className='overflow-y-auto mr-auto'>
                    <thead className='inter-font font-medium text-[1.125rem] sticky gap-x-[7.8125rem] flex'>
                        <th className='text-cyanText'>Pharmacies</th>
                        <th>Region</th>
                        <th>Location</th>
                    </thead>
                    {
                        options && options.map((pharmacyProps, index) => (
                            <tr key={index} className='hover:bg-[#00B4D8]'>
                                <td>{pharmacyProps.name}</td>
                                <td>{pharmacyProps.region}</td>
                                <td>{pharmacyProps.location}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

interface AuthDropdownInputProps {
    label: string
    hintText: string
    options: string[]
    required: boolean
}

export const AuthDropdownInput: React.FC<AuthDropdownInputProps> = ({ label, required, options, hintText }) => {
    const [activated, setActivated] = useState(false)
    const [selectedString, setSelectedString] = useState<string | null>(null)
    return (
        <div className='flex flex-col gap-[13px] w-[25.625rem] mb-[1.5625rem]'>
            <p className='text-authTitleColor text-sm font-medium leading-[14px] tracking-[-0.28px]'>{label}<span className='text-cyanText'>{required && '*'}</span></p>
            <div
                onClick={() => setActivated(!activated)}
                className='h-[3.125rem] rounded-2xl border border-[#E0E5F2] flex items-center py-[.5rem] px-[1rem] active:border-cyanText justify-between'
            >
                {hintText}
                <Image
                    width={24}
                    height={24}
                    src='/svgs/auth_dropdown.svg'
                    alt='dropdown arrow for selecting from a list of options'
                    className={`${activated && 'rotate-180'}`}
                />
            </div>
            <div className={`flex-col w-[51.125rem] bg-white rounded-2xl pt-[16px] px-[24px] mt-[14px] ${activated ? 'flex' : 'hidden'} w-[26.25rem] shadow-xl`}>
                {
                    options.map((option, index) => (
                        <></>
                    ))
                }
            </div>

        </div>
    )
}