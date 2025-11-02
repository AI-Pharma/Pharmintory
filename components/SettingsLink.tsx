interface SettingsLinkProps {
    label: string
    active: boolean
    onClick: () => void
}

const SettingsLink: React.FC<SettingsLinkProps> = ({ label, active, onClick }) => {
    return (
        <div className='flex flex-col w-[7.125rem] text-center hover:cursor-pointer' onClick={onClick}>
            <p className={`font-medium text-[1rem] inter-font ${active ? 'text-cyanText' : 'text-inactiveSettingsLink'}`}>{label}</p>
            <hr className={`${active ? 'flex' : 'hidden'} h-[.1875rem] w-full rounded-t-lg text-cyanText`} />
        </div>
    )
}

export default SettingsLink