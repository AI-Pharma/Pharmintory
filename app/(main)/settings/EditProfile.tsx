import Image from 'next/image'
import { FilledButton } from '@components/Buttons'
import { EditProfileTile } from '@components/FormTiles'

const EditProfile = () => {
    return (
        <div>
            <Image
                width={130}
                height={130}
                src='/images/avatar.png'
                alt='your profile pic is here'
                className='mx-auto mb-[3.8125rem] aspect-square rounded-full size-[8.125rem]'
            />
            <div className='grid grid-cols-2 gap-x-[1.8125rem] gap-y-[1.375rem] mx-[7.625rem] mb-[3.375rem]'>
                <EditProfileTile label='Your Name' placeholder='John Doe' />
                <EditProfileTile label='User Name' placeholder='John Doe' />
                <EditProfileTile label='Email' placeholder='johndoe2@gmail.com' />
                <EditProfileTile label='Gender' placeholder='Male' options={['Male', 'Female', 'Why are you gay?']} />
                <EditProfileTile label='Date of Birth' placeholder='10 October 1895' />
                <EditProfileTile label='Present Address' placeholder='San Jose, California, USA' />
            </div>
            <FilledButton label='Save' className='py-[.875rem] px-[4.625rem] ml-auto mr-[1.875rem] mb-[1.875rem]' />
        </div>
    )
}

export default EditProfile