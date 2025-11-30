'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FilledButton } from '@components/Buttons'

const VerifyPage = ({
    searchParams
}: {
    searchParams: {
        email?: string
        business?: string
        pharmacy?: string
        employees?: string
        pharmacyRegion?: string
        pharmacyLocation?: string
    }
}) => {
    const router = useRouter()
    const handleContinue = () => {
        const params = new URLSearchParams()

        if (searchParams.email) params.append('email', searchParams.email)
        if (searchParams.business) params.append('business', searchParams.business)
        if (searchParams.employees) params.append('employees', searchParams.employees)
        if (searchParams.pharmacy) params.append('pharmacy', searchParams.pharmacy)
        if (searchParams.pharmacyRegion) params.append('pharmacyRegion', searchParams.pharmacyRegion)
        if (searchParams.pharmacyLocation) params.append('pharmacyLocation', searchParams.pharmacyLocation)

        router.push(`/signup/final?${params.toString()}`)
    }

    return (
        <main className='flex pl-[16.625rem] pr-[6.375rem] gap-[15.5rem] pt-[6rem] items-center justify-center mb-[12.5rem]'>
            <div className='flex flex-col items-start w-[28.6875rem]'>
                <span className='capitalize text-authTitleColor text-4xl font-bold leading-[3.5rem] tracking-[-0.045rem] mb-2'>verify your identity</span>
                <span className='text-[#90E0EF] text-[16px] leading-[1rem] tracking-[-0.045rem] mb-[1.8125rem]'>Upload your pharmacy certification document to continue</span>

                <div className='border border-cyanText border-dashed h-[24.6875rem] w-full mb-[1.875rem] rounded-[8px]'>

                </div>

                <FilledButton
                    label='Continue'
                    onClick={handleContinue}
                    className='w-full rounded-[1rem] h-[3.375rem] mb-[1.5625rem] font-bold'
                />


            </div>
            <Image
                width={689.999}
                height={528.434}
                className='z-[-1] size-[35rem]'
                src='/images/auth/verification.png'
                alt='decorative image for sign up page'
            />
        </main>
    )
}

export default VerifyPage