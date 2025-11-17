import Image from 'next/image';
import Card from '@components/Card'
import { drugs } from './constants';
import StatusTile from '@components/StatusTile';
import { FilledButton, NormalButton, OutlinedButton } from '@components/Buttons'

const Database = () => {
    const arrowDown = '/svgs/database/arrow-down.svg'
    const arrowDownAlt = 'arrow_down'
    return (
        <Card className='mx-[2.125rem]'>
            {/* Top Row of the database listings */}
            <div className='flex px-[1.5rem] py-[1.21875rem] border-b-[1px] border-databaseBorderColor justify-between'>

                <div className='flex flex-col items-start'>
                    <div className='flex items-center gap-x-[1rem]'>
                        <h1 className='text-[1.125rem] font-medium leading-[1.75rem] inter-font'>Database</h1>
                        <span className='text-cyanText font-medium leading-[1.125rem] text-[0.75rem] inter-font'>Label text or value</span>
                    </div>

                    <p className='inter-font leading-[1.25rem] text-[0.875rem] text-databaseDesc'>Whatever is supposed to come here</p>
                </div>

                <div className='flex gap-x-[1rem]'>
                    <NormalButton
                        icon='/svgs/database/trash.svg'
                        label='Delete'
                    />
                    <NormalButton
                        icon='/svgs/database/filter-lines.svg'
                        label='Filter'
                    />

                    <OutlinedButton
                        icon='svgs/database/export.svg'
                        label='Export'
                    />
                    <FilledButton
                        icon='svgs/database/add.svg'
                        label='Add new Product'
                    />
                </div>
            </div>

            <table className='table-auto'>
                <thead>
                    <tr>
                        <th className='tableCell'>
                            <div className='tableCellHead'>
                                Product Name
                                <Image
                                    width={16}
                                    height={16}
                                    src={arrowDown}
                                    alt={arrowDownAlt}
                                />

                            </div>
                        </th>
                        <th className='tableCell'>
                            <div className='tableCellHead'>
                                Category
                                <Image
                                    width={16}
                                    height={16}
                                    src={arrowDown}
                                    alt={arrowDownAlt}
                                />

                            </div>
                        </th>
                        <th className='tableCell'>
                            <div className='tableCellHead'>
                                Selling Price
                                <Image
                                    width={16}
                                    height={16}
                                    src={arrowDown}
                                    alt={arrowDownAlt}
                                />

                            </div>
                        </th>
                        <th className='tableCell'>
                            <div className='tableCellHead'>
                                Quantity
                                <Image
                                    width={16}
                                    height={16}
                                    src={arrowDown}
                                    alt={arrowDownAlt}
                                />

                            </div>
                        </th>
                        <th className='tableCell'>
                            <div className='tableCellHead'>
                                Stock
                                <Image
                                    width={16}
                                    height={16}
                                    src={arrowDown}
                                    alt={arrowDownAlt}
                                />

                            </div>
                        </th>
                        <th className='tableCell'>
                            <div className='tableCellHead'>
                                Status
                                <Image
                                    width={16}
                                    height={16}
                                    src={arrowDown}
                                    alt={arrowDownAlt}
                                />

                            </div>
                        </th>
                        <th className='tableCell'>
                            <div className='tableCellHead'>
                                Expiry Date
                                <Image
                                    width={16}
                                    height={16}
                                    src={arrowDown}
                                    alt={arrowDownAlt}
                                />

                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        drugs.map((drugStats, index) => (
                            <tr key={index}>
                                <td className='tableCell inter-font font-medium text-someBlueColor'>{drugStats.productName}</td>
                                <td className='tableCell inter-font'>{drugStats.category}</td>
                                <td className='tableCell inter-font'>{drugStats.currency ?? '₵'} {drugStats.sellingPrice}</td>
                                <td className='tableCell inter-font'>{drugStats.quantity}</td>
                                <td className='tableCell inter-font'>{drugStats.stock} {drugStats.stockUnits}</td>
                                <td className='tableCell'><StatusTile status={drugStats.status}/></td>
                                <td className='tableCell inter-font'>{drugStats.expiryDate}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </Card>
    )
}

export default Database