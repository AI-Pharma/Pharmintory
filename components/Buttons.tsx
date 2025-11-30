import Image from 'next/image'

interface ButtonProps {
    icon?: string
    label?: string
    className?: string
    onClick?: () => void
}

export const NormalButton:React.FC<ButtonProps> = ({ label, icon, className }) => {
    return (
        <button className={`normalButton inter-font ${className}`}>
            {
                icon && (
                    <Image
                        src={icon}
                        alt={icon.slice(14)}
                        width={20}
                        height={20}
                        className='mr-[0.5rem]'
                    />
                )
            }
            {label}
        </button>
    )
}

export const OutlinedButton:React.FC<ButtonProps> = ({ label, icon, className }) => {
    return (
        <button className={`outlinedButton inter-font ${className}`}>
            {
                icon && (
                    <Image
                        src={icon}
                        alt={icon.slice(14)}
                        width={20}
                        height={20}
                        className='mr-[0.5rem]'
                    />
                )
            }
            {label}
        </button>
    )
}

export const FilledButton:React.FC<ButtonProps> = ({ label, icon, className, onClick }) => {
    return (
        <button
            className={`filledButton inter-font ${className}`}
            onClick={onClick}
        >
            {
                icon && (
                    <Image
                        src={icon}
                        alt={icon.slice(14)}
                        width={20}
                        height={20}
                        className='mr-[0.5rem]'
                    />
                )
            }
            {label}
        </button>
    )
}

export const BlueOutlinedButton: React.FC<ButtonProps> = ({ icon, className }) => {
    return (
        <button className={`flex bg-buttonBgColor size-[2.5rem] hover:cursor-pointer items-center justify-center ${className} inter-font`}>
            <Image
                width={18}
                height={20}
                src={icon!}
                alt={icon!.slice(5)}
            />
        </button>
    )
}