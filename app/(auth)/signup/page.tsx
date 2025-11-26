'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FilledButton } from '@components/Buttons'
import { AuthInput, AuthDropdownInput, AuthPharmaDropdownInput, PharmacyProperties } from '@components/AuthInput'

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
        <main className='flex pl-[266px] pr-[102px] gap-[248px] pt-[96px] items-center justify-center mb-[12.5rem]'>
            <div className='flex flex-col items-start w-[410px]'>
                <span className='capitalize text-authTitleColor text-4xl font-bold leading-[56px] tracking-[-0.72px] mb-2'>sign up</span>
                <span className='text-[#90E0EF] text-[1rem] leading-[16px] tracking-[-0.72px] mb-[29px]'>Enter your details to further proceed</span>

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
                <FilledButton
                    label='Continue'
                    className='w-full rounded-[1rem] h-[3.375rem] mb-[1.5625rem] font-bold'
                />
                <span className='text-sm leading-[1.625rem] tracking-[-0.0175rem] text-authTitleColor'>Already registered? <Link href='/login' className='font-bold text-cyanText'>Sign into your account</Link></span>
            </div>
            <Image
                width={689.999}
                height={528.434}
                className='z-[-1] size-[560px]'
                src='/images/auth/sign_up.png'
                alt='decorative image for sign up page'
            />
        </main>
    )
}

export default SignUpPage