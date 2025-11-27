'use client'

import Image from 'next/image'
import { useState } from 'react'

interface AuthDropdownInputProps {
    label: string
    hintText: string
    options: string[]
    required: boolean
}

const AuthDropdownInput: React.FC<AuthDropdownInputProps> = ({ label, required, options, hintText }) => {
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

export default AuthDropdownInput