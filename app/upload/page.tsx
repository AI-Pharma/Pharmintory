import Image from 'next/image'
import Card from '@components/Card'
import { DrugFormTile } from '@components/FormTiles'
import DrugPicUploadTile from '@components/DrugPicUploadTile'
import { FilledButton, OutlinedButton } from '@components/Buttons'

const UploadPage = () => {
    return (
        <Card className='upload'>
            <div className='flex justify-between mb-[3.25rem]'>
                <div className='flex gap-[0.6875rem]'>
                    <OutlinedButton
                        label='Discard'
                    />
                    <FilledButton
                        label='Add Product'
                    />
                </div>
                <div className='flex gap-[0.6875rem]'>
                    <OutlinedButton
                        icon='/svgs/upload/collapse_all.svg'
                        className='inter-font font-semibold'
                        label='Collapse all'
                    />
                    <OutlinedButton
                        label='Expand all'
                        className='text-lightGrey inter-font font-semibold'
                        icon='/svgs/upload/expand_all.svg'
                    />
                    <Image
                        width={18}
                        height={18}
                        alt='search_icon'
                        src='/svgs/upload/search.svg'
                    />
                </div>
            </div>

            <DrugPicUploadTile
                imgUrl='/images/ibuprofen.png'
                // TODO: Some drug
                alt='drug_being_uploaded'
            />

            <div className='flex flex-col justify-center px-[10.6875rem] gap-[1.625rem]'>
                <DrugFormTile
                    label='Product Name'
                />
                <DrugFormTile
                    label='Category'
                    options={['Drops', 'Inhaler', 'Saline', 'Capsule', 'Injection', 'Cream', 'Ointment', 'Tablet', 'Syrup']}
                />
                <DrugFormTile
                    label='Selling Price'
                />
                <DrugFormTile
                    label='Quantity'
                />
                <DrugFormTile
                    label='Stock'
                />
                <DrugFormTile
                    label='Expiry Date'
                />
            </div>
        </Card>
    )
}

export default UploadPage