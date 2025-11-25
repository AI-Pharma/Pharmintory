'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import AuthInput, { AuthDropdownInput, AuthPharmaDropdownInput, PharmacyProperties } from '@components/AuthInput'

const SignUpPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [pharmacies, setPharmacies] = useState<PharmacyProperties[]>([])

    useEffect(() => {
        setIsLoading(true)
        setError(null)
        fetch('https://ai-pharma-f8a3.onrender.com/pharmacies')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status}`)
                }
                return res.json()
            })
            .then((data: Array<PharmacyProperties>) => {
                console.log('API data received:', data)
                const result = data.map((pharmacyInfo) => ({
                    name: pharmacyInfo.name,
                    region: pharmacyInfo.region,
                    location: pharmacyInfo.location
                }))
                setPharmacies(result)
            })
            .catch((error) => {
                console.error('Fetch error:', error)
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])
    return (
        <main className='flex pl-[16.625rem] pr-[6.375rem] gap-[15.5rem] pt-[6rem] items-center justify-center'>
            <div className='flex flex-col items-start w-[25.625rem]'>
                <span className='capitalize text-authTitleColor text-4xl font-bold leading-[3.5rem] tracking-[-0.045rem] mb-2'>sign up</span>
                <span className='text-[#90E0EF] text-[16px] leading-[1rem] tracking-[-0.045rem] mb-[1.8125rem]'>Enter your details to further proceed</span>

                {isLoading && <div className='animate-spin rounded-full bg-cyanText border-t-transparent size-3'/>}
                {error && <div className="text-red-500">Error: {error}</div>}

                <AuthPharmaDropdownInput
                    label='Pharmacy'
                    required={true}
                    options={pharmacies}
                />
                <AuthInput
                    label='Email'
                    required={true}
                    hintText='danieljacobs.@abpharmacy.com'
                />
                <AuthDropdownInput
                    label='Employees'
                    required={true}
                    hintText='1 - 10 Employees'
                    options={[
                        '1 - 5 Employees', '1 - 10 Employees', '1 - 15 Employees', '1 - 20 Employees', 'N/A'
                    ]}
                />
                <AuthDropdownInput
                    label='Business'
                    required={true}
                    hintText='Inventory Management'
                    options={[
                        'Inventory Management', 'Business Consultancy & Strategy', 'Investment & Financial Planning',
                        'Training & Capacity building', 'Marketing, PR or Sponsorship', 'Software Development & Customization',
                        'Customer Support & Maintenance'
                    ]}
                />
            </div>
            <Image
                width={689.999}
                height={528.434}
                className='z-[-1] size-[35rem]'
                src='/images/auth/sign_up.png'
                alt='decorative image for sign up page'
            />
        </main>
    )
}

export default SignUpPage