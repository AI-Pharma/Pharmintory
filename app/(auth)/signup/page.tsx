'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FilledButton } from '@components/Buttons'
import AuthInput from '@components/AuthInputs/AuthInput'
import AuthDropdownInput from '@components/AuthInputs/AuthDropdownInput'
import AuthPharmaDropdownInput from '@components/AuthInputs/AuthPharmaDropdownInput'

const SignUpPage = () => {
    return (
        <main className='flex pl-[266px] pr-[102px] gap-[248px] pt-[96px] items-center justify-center mb-[12.5rem]'>
            <div className='flex flex-col items-start w-[410px]'>
                <span className='capitalize text-authTitleColor text-4xl font-bold leading-[56px] tracking-[-0.72px] mb-2'>sign up</span>
                <span className='text-[#90E0EF] text-[1rem] leading-[16px] tracking-[-0.72px] mb-[29px]'>Enter your details to further proceed</span>

                <AuthPharmaDropdownInput
                    label='Pharmacy'
                    required={true}
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

                <Link
                    href='signup/verify'
                    className='w-full'
                >
                    <FilledButton
                        label='Continue'
                        className='w-full rounded-[1rem] h-[3.375rem] mb-[1.5625rem] font-bold'
                    />
                </Link>

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