import Image from 'next/image'
import { FilledButton } from '@components/Buttons'
import AuthPasswordInput from '@components/AuthInputs/AuthPasswordInput'

const FinalAuthPage = () => {
    return (
        <main className='flex pl-[16.625rem] pr-[6.375rem] gap-[15.5rem] pt-[6rem] items-center justify-center mb-[12.5rem]'>
            <div className='flex flex-col items-start w-[25.625rem]'>
                <span className='capitalize text-authTitleColor text-4xl font-bold leading-[3.5rem] tracking-[-0.045rem] mb-2'>sign up</span>
                <span className='text-[#90E0EF] text-[16px] leading-[1rem] tracking-[-0.045rem] mb-[1.8125rem]'>Enter your details to further proceed</span>

                <AuthPasswordInput
                    label='Password'
                    required={true}
                    hintText='Password'
                />
                <AuthPasswordInput
                    label='Confirm Password'
                    required={true}
                    hintText='Confirmation'
                />
                <FilledButton
                    label='Get Started'
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