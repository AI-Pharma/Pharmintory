import Link from 'next/link'
import Image from 'next/image'
import { FilledButton } from '@components/Buttons'
import AuthInput from '@components/AuthInputs/AuthInput'
import AuthPasswordInput from '@components/AuthInputs/AuthPasswordInput'

const SignInPage = () => {

    return (
        <main className='flex pl-[16.625rem] pr-[6.375rem] gap-[15.5rem] pt-[6rem] items-center justify-center mb-[12.5rem]'>
            <div className='flex flex-col items-start w-[25.625rem]'>
                <span className='capitalize text-authTitleColor text-4xl font-bold leading-[3.5rem] tracking-[-0.045rem] mb-2'>sign in</span>
                <span className='text-[#90E0EF] text-[16px] leading-[1rem] tracking-[-0.045rem] mb-[1.8125rem]'>Enter your email and password to sign in!</span>

                <AuthInput
                    label='Email'
                    required={true}
                    hintText='danieljacobs.@abpharmacy.com'
                />
                <AuthPasswordInput
                    label='Password'
                    required={true}
                    hintText='************'
                />
                <FilledButton
                    label='Sign In'
                    className='w-full rounded-[1rem] h-[3.375rem] mb-[1.5625rem] font-bold'
                />
                <span className='text-sm leading-[1.625rem] tracking-[-0.0175rem] text-authTitleColor'>Already registered? <Link href='/login' className='font-bold text-cyanText'>Sign into your account</Link></span>
            </div>
            <Image
                width={689.999}
                height={528.434}
                className='z-[-1] size-[35rem]'
                src='/images/auth/sign_in.png'
                alt='decorative image for sign up page'
            />
        </main>
    )
}

export default SignInPage