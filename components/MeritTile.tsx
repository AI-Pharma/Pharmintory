import Image from 'next/image'

export interface MeritTileProps {
    image: string
    title: string
    position: number
    foreground: string
    description: string
}

const MeritTile: React.FC<MeritTileProps> = ({ image, title, foreground, description, position }) => {
    return (
        <section className='meritTile'>
            <div className='flex flex-col flex-1 items-center'>
                <Image
                    width={491}
                    height={550}
                    alt='foreground'
                    src={foreground}
                    className='z-1'
                />
                <Image
                    width={665}
                    src={image}
                    height={429.86}
                    alt='image of the application'
                    className='z-2 border-[.8125rem] rounded-2xl border-black absolute mt-[5.625rem]'
                />
            </div>
            <div className={`flex flex-col flex-1 mx-auto items-start ${ position % 2 == 0 ? 'mr-auto' : 'ml-auto'}`}>
                <h5 className='text-[#111827] text-[3rem] text-start font-bold leading-[3.75rem]'>{title}</h5>
                <p className='inter-font text-[1.125rem] leading-[1.6313rem] text-[#626262]'>{description}</p>
            </div>
        </section>
    )
}

export default MeritTile