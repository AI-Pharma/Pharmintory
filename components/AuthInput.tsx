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

export const AuthInput: React.FC<AuthInputProps> = ({ label, hintText, required }) => {
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

export const AuthPasswordInput: React.FC<AuthInputProps> = ({ label, hintText, required }) => {
    const [inputText, setInputText] = useState<string>()
    function togglePasswordVisibility() {
        const passwordInput = document.getElementById('passwordInput');

        // @ts-expect-error ts does not know this type property
        if (passwordInput!.type === 'password') {
            // @ts-expect-error ts does not know this type property
            passwordInput!.type = 'text'; // Change type to "text" to show password
        } else {
            // @ts-expect-error ts does not know this type property
            passwordInput!.type = 'password'; // Change type back to "password" to hide it
        }
    }
    return (
        <div className='flex flex-col gap-[13px] w-[25.625rem] mb-[1.5625rem]'>
            <p className='text-authTitleColor text-sm font-medium leading-[14px] tracking-[-0.28px]'>{label}<span className='text-cyanText'>{required && '*'}</span></p>
            <div className='flex items-center border rounded-2xl border-[#E0E5F2] h-[3.125rem] justify-between pr-[1.125rem]'>
                <input
                    type='password'
                    value={inputText}
                    id='passwordInput'
                    placeholder={hintText}
                    onChange={(e) => setInputText(e.target.value)}
                    className='pl-[1.5rem] w-full border-none focus:outline-none focus:ring-0'
                />
                <Image
                    width={20}
                    height={20}
                    src='/svgs/red_eye.svg'
                    alt='show and hide password'
                    className='hover:cursor-pointer ml-auto'
                    onClick={() => togglePasswordVisibility()}
                />
            </div>
        </div>
    )
}

export const AuthPharmaDropdownInput: React.FC<AuthInputProps> = ({ label, required, options = [] }) => {
    const [activated, setActivated] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedString, setSelectedString] = useState<string | null>(null)

    const filteredOptions = options.filter(pharmacy =>
        pharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pharmacy.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pharmacy.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
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
                        type='text'
                        value={searchTerm}
                        placeholder='Search by name, region, or location'
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='w-full border-none focus:outline-none focus:ring-0'
                        onClick={(e) => e.stopPropagation()}
                    />
                    {searchTerm && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSearchTerm('');
                            }}
                            className='text-gray-400 hover:text-gray-600'
                        >
                            ✕
                        </button>
                    )}
                </div>
                <table className='overflow-y-auto mr-auto'>
                    <thead className='inter-font font-medium text-[1.125rem] sticky gap-x-[7.8125rem] flex'>
                        <th className='text-cyanText'>Pharmacies</th>
                        <th>Region</th>
                        <th>Location</th>
                    </thead>
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((pharmacyProps, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-cyan-50 cursor-pointer ${selectedString === pharmacyProps.name ? 'bg-cyan-100' : ''}`}
                                onClick={() => {
                                    setSelectedString(pharmacyProps.name);
                                    setActivated(false);
                                }}
                            >
                                <td className='p-3'>{pharmacyProps.name}</td>
                                <td className='p-3'>{pharmacyProps.region}</td>
                                <td className='p-3'>{pharmacyProps.location}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3} className='p-4 text-center text-gray-500'>
                                {searchTerm ? 'No matching pharmacies found' : 'No pharmacies available'}
                            </td>
                        </tr>
                    )}
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
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>('');
    // const [searchTerm, setSearchTerm] = useState('');

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    return (
        <div className='flex flex-col gap-[13px] w-[25.625rem] mb-[1.5625rem] relative'>
            <p className='text-authTitleColor text-sm font-medium leading-[14px] tracking-[-0.28px]'>
                {label}
                <span className='text-cyanText'>{required && '*'}</span>
            </p>

            <div
                className='h-[3.125rem] rounded-2xl border border-[#E0E5F2] flex items-center py-[.5rem] px-[1rem] active:border-cyanText justify-between cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`${!selectedValue ? 'text-gray-400' : 'text-black'}`}>
                    {selectedValue || hintText}
                </span>
                <Image
                    src='/svgs/auth_dropdown.svg'
                    width={24}
                    height={24}
                    alt='dropdown arrow'
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {isOpen && (
                <div className='absolute top-[5.5rem] w-full bg-white rounded-2xl shadow-xl z-10 border border-[#E0E5F2] overflow-hidden'>
                    <div className='max-h-60 overflow-y-auto'>
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className={`p-3 hover:bg-cyan-50 cursor-pointer ${selectedValue === option ? 'bg-cyan-100' : ''}`}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}