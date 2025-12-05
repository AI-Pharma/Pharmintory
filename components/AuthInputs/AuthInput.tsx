import { AuthInputProps } from './types'

const AuthInput: React.FC<AuthInputProps> = ({
    label,
    textValue,
    hintText,
    onChange,
    required,
}) => {
    return (
        <div className='flex flex-col gap-[13px] w-[25.625rem] mb-[1.5625rem]'>
            <p className='text-authTitleColor text-sm font-medium leading-[14px] tracking-[-0.28px]'>
                {label}
                <span className='text-cyanText'>{required && '*'}</span>
            </p>
            <div className='flex items-center border rounded-2xl border-[#E0E0F2] h-[3.125rem]'>
                <input
                    type='text'
                    placeholder={hintText}
                    value={textValue || ''}
                    onChange={(e) => onChange?.(e.target.value)}
                    className='pl-[1.5rem] w-full border-none focus:outline-none focus:ring-0'
                />
            </div>
        </div>
    )
}

export default AuthInput