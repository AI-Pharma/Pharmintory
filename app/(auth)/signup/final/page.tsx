'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FilledButton } from '@components/Buttons'
import AuthPasswordInput from '@components/AuthInputs/AuthPasswordInput'

const FinalAuthPage = ({
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
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            window.alert('Password and confirm password must be identical')
            return
        }

        try {
            const res = await fetch('https://ai-pharma-f8a3.onrender.com/auth/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: searchParams.email,
                    business: searchParams.business,
                    pharmacy: searchParams.pharmacy,
                    password: confirmPassword,
                    region: searchParams.pharmacyRegion,
                    location: searchParams.pharmacyLocation
                })
            })

            if (!res.ok) {
                return
            }

            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <main className='flex pl-[16.625rem] pr-[6.375rem] gap-[15.5rem] pt-[6rem] items-center justify-center mb-[12.5rem]'>
            <div className='flex flex-col items-start w-[25.625rem]'>
                <span className='capitalize text-authTitleColor text-4xl font-bold leading-[3.5rem] tracking-[-0.045rem] mb-2'>sign up</span>
                <span className='text-[#90E0EF] text-[16px] leading-[1rem] tracking-[-0.045rem] mb-[1.8125rem]'>Enter your details to further proceed</span>

                <AuthPasswordInput
                    label='Password'
                    required={true}
                    hintText='Password'
                    textValue={password}
                    onChange={setPassword}
                />
                <AuthPasswordInput
                    required={true}
                    hintText='Confirmation'
                    label='Confirm Password'
                    textValue={confirmPassword}
                    onChange={setConfirmPassword}
                />
                <FilledButton
                    label='Get Started'
                    onClick={handleSubmit}
                    className='w-full rounded-[1rem] h-[3.375rem] mb-[1.5625rem] font-bold'
                />

            </div>
            <Image
                width={689.999}
                height={528.434}
                className='z-[-1] size-[35rem]'
                src='/images/auth/final.png'
                alt='decorative image for sign up page'
            />
        </main>
    )
}

export default FinalAuthPage