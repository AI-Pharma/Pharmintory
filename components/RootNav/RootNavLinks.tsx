import Link from "next/link"

interface RootNavLinkProps {
    href: string
    label: string
    active: boolean
    onClick: () => void
}

const RootNavLink: React.FC<RootNavLinkProps> = ({ label, active, href, onClick }) => {
    return (
        <Link href={href} className='flex text-center hover:cursor-pointer' onClick={onClick}>
            <p className={`font-medium text-[1rem] inter-font ${active ? 'text-cyanText' : 'text-inactiveSettingsLink'}`}>{label}</p>
        </Link>
    )
}

export default RootNavLink