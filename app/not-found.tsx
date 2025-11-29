import Link from 'next/link'
import Image from 'next/image'
import { FilledButton } from '@components/Buttons'

const NotFound = () => {
    return (
        <main className='flex flex-col items-center justify-center'>
            <Image
                width={509}
                height={509}
                src='/images/errors/not_found.png'
                alt='not found page illustrated using disconnect'
            />
            <h2 className='capitalize text-authTitleColor text-[2.5rem] font-semibold leading-[3rem] tracking-[-0.05rem] mb-[.9375rem]'>page not found</h2>
            <p className='text-errorSubText text-2xl text-center leading-[1.8rem] tracking-[-0.0175rem] mb-[.9375rem]'>Sorry, we could not find the page you&apos;re looking for</p>
            <Link href='/'>
                <FilledButton
                    label='BACK TO HOME'
                    className='rounded-[.25rem] px-[1.5rem] py-[1rem] font-extrabold text-[1rem] leading-[1.1rem] tracking-[.06rem]'
                />
            </Link>
        </main>
    )
}

export default NotFound