'use client'

import Image from 'next/image'
import { useState } from 'react';
import { AuthInputProps } from './types';

const AuthPasswordInput: React.FC<AuthInputProps> = ({ label, hintText, required }) => {
    const [inputText, setInputText] = useState<string>()
    function togglePasswordVisibility() {
        const passwordInput = document.getElementById('passwordInput');

        // @ts-expect-error ts does not know this type property
        if (passwordInput!.type === 'password') {
            // @ts-expect-error ts does not know this type property
            passwordInput!.type = 'text'; // Change type to "text" to show password
        } else {
            // @ts-expect-error ts does not know this type property
            passwordInput!.type = 'password';
        }
    }
    return (
        <div className='flex flex-col gap-[13px] w-[25.625rem] mb-[1.5625rem]'>
            <p className='text-authTitleColor text-sm font-medium leading-[14px] tracking-[-0.28px]'>{label}<span className='text-cyanText'>{required && '*'}</span></p>
            <div className='flex items-center border rounded-2xl border-[#E0E5F2] h-[3.125rem] justify-between pr-[1.125rem]'>
                <input
                    type='password'
                    value={inputText}
                    id='passwordInput'
                    placeholder={hintText}
                    onChange={(e) => setInputText(e.target.value)}
                    className='pl-[1.5rem] w-full border-none focus:outline-none focus:ring-0'
                />
                <Image
                    width={20}
                    height={20}
                    src='/svgs/red_eye.svg'
                    alt='show and hide password'
                    className='hover:cursor-pointer ml-auto'
                    onClick={() => togglePasswordVisibility()}
                />
            </div>
        </div>
    )
}

export default AuthPasswordInput;
