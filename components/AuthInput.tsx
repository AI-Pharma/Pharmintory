'use client'

import React, { act, useState } from "react"

interface AuthInputProps {
    label: string
    hintText: string
    required: boolean
    options?: string[]
}

const AuthInput:React.FC<AuthInputProps> = ({ label, hintText, required }) => {
    const [inputText, setInputText] = useState<string>()
    return (
        <div className='flex flex-col gap-[13px]'>
            <p className='text-authTitleColor text-sm font-medium leading-[14px] tracking-[-0.28px]'>{label}&nbsp<span className='text-cyanText'>{required && '*'}</span></p>
            <div className='flex items-center border rounded-2xl border-[#E0E5F2] h-[50px]'>
                    <input
                        type='text'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder={hintText}
                    />
            </div>
        </div>
    )
}

export default AuthInput

export const AuthDropdownInput: React.FC<AuthInputProps> = ({ label, hintText, required, options}) => {
    const [inputText, setInputText] = useState<string>()
    const [activated, setActivated] = useState(false)
    return (
        <div className='flex flex-col gap-[13px]'>
            <p className='text-authTitleColor text-sm font-medium leading-[14px] tracking-[-0.28px]'>{label}&nbsp<span className='text-cyanText'>{required && '*'}</span></p>
            <div className='flex items-center border rounded-2xl border-[#E0E5F2] h-[50px]'>
                    <input
                        type='text'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder={hintText}
                    />
            </div>
            <div
                onClick={() => setActivated(!activated)}
                className={`flex-col bg-white rounded-2xl pt-[16px] px-[24px] mt-[14px] ${activated ? 'flex' : 'hidden'} w-[26.25rem]`}
            >
                <span className='capitalize mb-[1.7188rem] text-[#6C757D] text-[.9375rem] font-semibold'>Available pharmacies</span>
                <input
                    type='text'
                    value={inputText}
                    placeholder="Search"
                    onChange={(e) => setInputText(e.target.value)}
                    className='w-full py-[.9063rem] pl-[1rem] border rounded-[.5rem] border-[#00000066]'
                />
                <ul>
                    
                </ul>
            </div>
        </div>
    )
}