'use client'

import { useState } from 'react'

interface DrugFormTileProps {
    label: string
    options?: string[]
    placeholder?: string
}

export const DrugFormTile:React.FC<DrugFormTileProps> = ({ label, options }) => {
    const [value, setValue] = useState('')

    return (
        <div className="flex gap-[0.5rem]">
            {/* Label */}
            <div className="flex items-center justify-center px-[1.3125rem] py-[0.625rem] rounded-[0.3125rem] border border-lightGrey bg-white font-medium text-sm text-gray-700 whitespace-nowrap">
                {label}
            </div>

            {/* Input or Dropdown */}
            <div className="flex items-center p-[0.625rem] rounded-[0.3125rem] border border-lightGrey w-full bg-white">
                {options && options.length > 0 ? (
                    <select
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full outline-none bg-transparent text-gray-700"
                    >
                        <option value="" disabled>
                            Select...
                        </option>
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full outline-none bg-transparent text-gray-700"
                        placeholder="Enter value..."
                    />
                )}
            </div>
        </div>
    )
}

export const EditProfileTile:React.FC<DrugFormTileProps> = ({ label, options, placeholder }) => {
    const [value, setValue] = useState<string>('')
    return (
        <div className='flex flex-col w-[26.125rem] h-[5rem] items-start gap-[.375rem]'>
            <p className='text-editProfileLabel text-[1rem]'>{label}</p>
            <div className="flex items-center ">
                {options && options.length > 0 ? (
                    <select
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-[26.125rem] outline-none bg-transparent text-inactiveSettingsLink text-[.9375rem] rounded-[.9375rem] pl-[1.25rem] pt-[1rem] pb-[.6875rem] border border-[#DFEAF2]"
                    >
                        <option value="" disabled>
                            {placeholder ?? 'Enter text...'}
                        </option>
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-[26.125rem] outline-none bg-transparent text-inactiveSettingsLink text-[.9375rem] rounded-[.9375rem] pl-[1.25rem] pt-[1rem] pb-[.6875rem] border border-[#DFEAF2]"
                        placeholder={placeholder ?? 'Enter text...'}
                    />
                )}
            </div>
        </div>
    )
}