import FeatureTile from '@components/FeatureTile'
import { featureTileInfo } from '@constants/prime'
import Image from 'next/image'

const Landing = () => {
    return (
        <main className='flex flex-col items-center mt-[3.8125rem] px-[19.3125rem]'>

            {/* First Component */}
            <div className='flex flex-col w-[39.6875rem] items-center gap-[1.4375rem] mb-[4.25rem]'>
                <h4 className='text-center text-2xl font-semibold leading-[2.125rem] tracking-[-0.0271rem] text-cyanText urbanist-font capitalize'>AI PHARMA</h4>
                <p className='text-someBlackColor text-center urbanist-font text-[4rem] font-bold leading-[4.625rem] tracking-[-0.0722rem]'>The future of pharmaceutical data</p>
                <p className='text-footerGrey text-center urbanist-font text-[1.25rem] font-semibold leading-[1.875rem] tracking-[.0226rem]'></p>
                <button className='flex py-[.9375rem] px-[1.25rem] text-cyanText urbanist-font font-semibold leading-[1.75rem] tracking-[-0.0203rem] text-[1.125rem] items-center gap-[.8594rem] hover:cursor-pointer'>
                    Learn More
                    <Image
                        width={22}
                        height={22}
                        alt='learn more'
                        src='/svgs/arrow-back.svg'
                    />
                </button>
            </div>

            {/* Image container */}
            <div className='border-x-[1.485rem] border-black border-b-0 border-t-[1.485rem] rounded-t-[1.2712rem] mb-[17.1875rem]'>
                <Image
                    width={926}
                    height={599}
                    alt='dashboard image'
                    src='/images/dashboard.png'
                />
            </div>

            <div className='flex flex-col w-[48.875rem] items-center gap-[1.4375rem] mb-[4.25rem]'>
                <h4 className='text-center text-2xl font-semibold leading-[2.125rem] tracking-[-0.0271rem] text-cyanText urbanist-font capitalize'>AI PHARMA</h4>
                <p className='text-someBlackColor text-center urbanist-font text-[3.25rem] font-medium leading-[4rem] tracking-[-0.0587rem]'>Smart tools for smarter data management</p>
            </div>

            <div className='flex gap-[1.875rem]'>
                {featureTileInfo.map((info, index) => (
                    <FeatureTile
                        key={index}
                        icon={info.icon}
                        text={info.text}
                        href={info.href}
                    />
                ))}
            </div>
        </main>
    )
}

export default Landing