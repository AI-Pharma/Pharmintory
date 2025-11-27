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

    // Debounced search function
    useEffect(() => {
        // If dropdown is closed or search is empty, don't fetch
        if (!activated || searchTerm.trim().length === 0) {
            setPharmacies([])
            return
        }

        const delayDebounceFn = setTimeout(() => {
            fetchPharmacies(searchTerm)
        }, 300) // Wait 300ms after user stops typing

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm, activated]) // Trigger when searchTerm OR activated changes

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

    // Open dropdown and focus on search input
    const handleDropdownClick = () => {
        setActivated(true)
        // If there's already a search term, fetch results when opening
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

            {/* Dropdown Trigger */}
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

            {/* Dropdown Content */}
            <div className={`flex-col w-[51.125rem] bg-white rounded-2xl pt-[16px] px-[24px] mt-[14px] ${activated ? 'flex' : 'hidden'} w-[26.25rem] shadow-xl absolute z-2`}>
                <span className='capitalize mb-[1.7188rem] text-[#6C757D] text-[.9375rem] font-semibold'>
                    Available pharmacies
                </span>

                {/* Search Input */}
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

                {/* Loading State */}
                {isLoading && (
                    <div className="p-4 text-center text-gray-500">
                        Searching pharmacies...
                    </div>
                )}

                {/* Error State */}
                {error && !isLoading && (
                    <div className="p-4 text-center text-red-500">
                        Error: {error}
                    </div>
                )}

                {/* Results Table */}
                <table className='overflow-y-auto mr-auto'>
                    <thead className='inter-font font-medium text-[1.125rem] sticky gap-x-[7.8125rem] flex'>
                        <th className='text-cyanText'>Pharmacies</th>
                        <th>Region</th>
                        <th>Location</th>
                    </thead>

                    <tbody>
                        {!isLoading && !error && filteredOptions.length > 0 ? (
                            filteredOptions.map((pharmacyProps, index) => (
                                <tr
                                    key={`${pharmacyProps.name}-${index}`}
                                    className={`hover:bg-cyan-50 cursor-pointer ${selectedString === pharmacyProps.name ? 'bg-cyan-100' : ''}`}
                                    onClick={() => {
                                        setSelectedString(pharmacyProps.name);
                                        setActivated(false);
                                        setSearchTerm(''); // Clear search when selected
                                    }}
                                >
                                    <td className='p-3'>{pharmacyProps.name}</td>
                                    <td className='p-3'>{pharmacyProps.region}</td>
                                    <td className='p-3'>{pharmacyProps.location}</td>
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
    )
}

export default AuthPharmaDropdownInput;