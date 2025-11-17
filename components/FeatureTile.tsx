import Link from 'next/link';
import Image from 'next/image'

export interface FeatureTileProps {
    icon: string;
    text: string;
    href: string;
}

const FeatureTile: React.FC<FeatureTileProps> = ({ icon, text, href }) => {
    return (
        <section className='flex flex-col items-center w-[21.875rem]'>
            <div className='flex rounded-full size-[3.375rem] bg-[#F4F3FF] justify-center items-center mb-6'>
                <Image
                    width={24}
                    src={icon}
                    height={24}
                    alt='feature icon'
                />
            </div>

            <p className='text-footerGrey urbanist-font text-[1.25rem] font-medium leading-[1.875rem] tracking-[-0.0226rem] text-center mb-[1.3125rem] h-[5.625rem]'>{text}</p>

            <Link
                href={href}
                className='flex text-cyanText urbanist-font font-semibold leading-[1.625rem] tracking-[-0.0181rem] text-[1rem] items-center gap-[.4375rem] hover:cursor-pointer'
            >
                Learn More
                <Image
                    width={24}
                    height={24}
                    alt='see more'
                    src='/svgs/right.svg'
                />
            </Link>
        </section>
    )
}

export default FeatureTile