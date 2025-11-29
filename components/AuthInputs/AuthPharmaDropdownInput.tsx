'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AuthInputProps, PharmacyProperties } from './types'

const AuthPharmaDropdownInput: React.FC<AuthInputProps> = ({ label, required, options = [] }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [activated, setActivated] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [pharmacies, setPharmacies] = useState<PharmacyProperties[]>([])
    const [selectedString, setSelectedString] = useState<string | null>(null)

    useEffect(() => {
        if (!activated || searchTerm.trim().length === 0) {
            setPharmacies([])
            return
        }

        const delayDebounceFn = setTimeout(() => {
            fetchPharmacies(searchTerm)
        }, 300)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm, activated])

    const fetchPharmacies = async (search: string) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch(`https://ai-pharma-f8a3.onrender.com/pharmacies?search=${encodeURIComponent(search)}&limit=20`)

            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status}`)
            }

            const data = await response.json()

            if (data.success) {
                console.log('API data received:', data.data)
                setPharmacies(data.data)
            } else {
                throw new Error(data.message || 'API request failed')
            }
        } catch (error) {
            console.error('Fetch error:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDropdownClick = () => {
        setActivated(true)
        if (searchTerm.trim().length > 0 && pharmacies.length === 0) {
            fetchPharmacies(searchTerm)
        }
    }

    const filteredOptions = pharmacies.length > 0 ? pharmacies : options

    return (
        <div className='flex flex-col gap-[13px] w-[25.625rem] mb-[1.5625rem]'>
            <p className='text-authTitleColor text-sm font-medium leading-[14px] tracking-[-0.28px]'>
                {label}<span className='text-cyanText'>{required && '*'}</span>
            </p>

            <div
                onClick={handleDropdownClick}
                className='h-[3.125rem] rounded-2xl border border-[#E0E5F2] flex items-center py-[.5rem] px-[1rem] active:border-cyanText justify-between cursor-pointer'
            >
                {selectedString ?? 'ABBA Chemists Ltd'}
                <Image
                    src='/svgs/auth_dropdown.svg'
                    width={24}
                    height={24}
                    alt='dropdown arrow for selecting from a list of options'
                    className={`${activated && 'rotate-180'} transition-transform`}
                />
            </div>

            <div className={`flex-col w-[51.125rem] bg-white rounded-2xl pt-[16px] px-[24px] mt-[14px] ${activated ? 'flex' : 'hidden'} w-[26.25rem] shadow-xl absolute z-2`}>
                <span className='capitalize mb-[1.7188rem] text-[#6C757D] text-[.9375rem] font-semibold'>
                    Available pharmacies
                </span>

                <div className='my-[.75rem] h-[3rem] rounded-[.5rem] border border-[#00000066] flex items-center py-[.5rem] px-[1rem] active:border-cyanText justify-between'>
                    <input
                        type='text'
                        value={searchTerm}
                        placeholder='Search by name, region, or location'
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='w-full border-none focus:outline-none focus:ring-0'
                        onClick={(e) => e.stopPropagation()}
                        autoFocus={activated}
                    />
                    {searchTerm && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSearchTerm('');
                                setPharmacies([]);
                            }}
                            className='text-gray-400 hover:text-gray-600 ml-2'
                        >
                            ✕
                        </button>
                    )}
                </div>

                {isLoading && (
                    <div className="p-4 text-center text-gray-500">
                        Searching pharmacies...
                    </div>
                )}

                {error && !isLoading && (
                    <div className="p-4 text-center text-red-500">
                        Error: {error}
                    </div>
                )}

                <div className="overflow-y-auto max-h-60">
                    <table className='w-full'>
                        <thead className='inter-font font-medium text-[1.125rem] text-left sticky top-0 bg-white'>
                            <tr className='border-b border-gray-200'>
                                <th className='text-cyanText p-3 w-1/3'>Pharmacies</th>
                                <th className='p-3 w-1/3'>Region</th>
                                <th className='p-3 w-1/3'>Location</th>
                            </tr>
                        </thead>

                        <tbody>
                            {!isLoading && !error && filteredOptions.length > 0 ? (
                                filteredOptions.map((pharmacyProps, index) => (
                                    <tr
                                        key={`${pharmacyProps.name}-${index}`}
                                        className={`hover:bg-cyan-50 cursor-pointer border-b border-gray-100 ${selectedString === pharmacyProps.name ? 'bg-cyan-100' : ''}`}
                                        onClick={() => {
                                            setSelectedString(pharmacyProps.name);
                                            setActivated(false);
                                            setSearchTerm('');
                                        }}
                                    >
                                        <td className='p-3 lowercase w-1/3' style={{ textTransform: 'capitalize' }}>{pharmacyProps.name}</td>
                                        <td className='p-3 capitalize w-1/3'>{pharmacyProps.region}</td>
                                        <td className='p-3 lowercase w-1/3' style={{ textTransform: 'capitalize' }}>{pharmacyProps.location}</td>
                                    </tr>
                                ))
                            ) : (
                                !isLoading && !error && (
                                    <tr>
                                        <td colSpan={3} className='p-4 text-center text-gray-500'>
                                            {searchTerm ? 'No matching pharmacies found' : 'Start typing to search pharmacies'}
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AuthPharmaDropdownInput;