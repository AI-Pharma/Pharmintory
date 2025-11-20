import { FilledButton, OutlinedButton } from '@components/Buttons'
import Card from '@components/Card'
import MemberTile from '@components/MemberTile'

const teamMembers = [
    {
        src: '/images/team/woman_1.jpg',
        alt: 'team-member-1',
        name: 'Sophia Mensah',
        email: 'sophia.mensah@example.com',
        title: 'Pharmacist',
        color: '#03045E',
    },
    {
        src: '/images/team/man_1.jpg',
        alt: 'team-member-2',
        name: 'Kwame Boateng',
        email: 'kwame.boateng@example.com',
        title: 'Assistant Pharmacist',
        color: '#023E8A',
    },
    {
        src: '/images/team/woman_2.jpg',
        alt: 'team-member-3',
        name: 'Adwoa Koomson',
        email: 'adwoa.koomson@example.com',
        title: 'Pharmacy Technician',
        color: '#0077B6',
    },
    {
        src: '/images/team/man_2.jpg',
        alt: 'team-member-4',
        name: 'Yaw Antwi',
        email: 'yaw.antwi@example.com',
        title: 'Dispensing Officer',
        color: '#0096C7',
    },
    {
        src: '/images/team/woman_3.jpg',
        alt: 'team-member-5',
        name: 'Ama Osei',
        email: 'ama.osei@example.com',
        title: 'Cashier',
        color: '#00B4D8',
    },
    {
        src: '/images/team/man_3.jpg',
        alt: 'team-member-6',
        name: 'Kojo Appiah',
        email: 'kojo.appiah@example.com',
        title: 'Store Manager',
        color: '#48CAE4',
    },
    {
        src: '/images/team/woman_4.jpg',
        alt: 'team-member-7',
        name: 'Efua Addo',
        email: 'efua.addo@example.com',
        title: 'Pharmacy Intern',
        color: '#90E0EF',
    },
    {
        src: '/images/team/man_4.jpg',
        alt: 'team-member-8',
        name: 'Daniel Owusu',
        email: 'daniel.owusu@example.com',
        title: 'Customer Service',
        color: '#ADE8F4',
    },
]

const Page = () => {
    return (
        <Card className="p-[1.25rem] ml-[5.5rem] mr-[8.8125rem]">
            {/* Header */}
            <div className="flex justify-between ml-[2.6875rem] mb-[3.125rem]">
                <h2 className="font-medium text-[1.25rem]">Team</h2>
                {/* TODO: Replace hardcoded pharmacy name with real data */}
                <p className="text-teamGroupColor text-[0.75rem]">
                    Group:{' '}
                    <span className="text-teamPharmacy text-[0.9375rem]">
                        &nbsp;AB Pharmacy
                    </span>
                </p>
            </div>

            {/* Button row placeholder */}
            <div className="flex gap-[0.75rem] mb-[1.5625rem]">
                {/* TODO: Implement mechanism for switching buttons when pressed */}
                <OutlinedButton
                    icon='/svgs/team/list.svg'
                    label='List'
                />
                <FilledButton
                    icon='/svgs/team/grid.svg'
                    label='Grid'
                />
            </div>

            {/* Members grid */}
            <div className="grid grid-cols-4 gap-x-[2.1875rem] gap-y-[1.5625rem]">
                {teamMembers.map((member) => (
                    <MemberTile
                        key={member.email}
                        src={member.src}
                        alt={member.alt}
                        name={member.name}
                        email={member.email}
                        title={member.title}
                        color={member.color}
                    />
                ))}
            </div>

        </Card>
    )
}

export default Page
