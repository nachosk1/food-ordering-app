import Image from 'next/image'
import React from 'react'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'

export default function HomeMenu() {
    return (
        <div className=''>
            <div>
                <div className='absolute left-0 -mt-32 -z-10'>
                    <Image
                        src={'/assets/sallad1.png'}
                        width={190}
                        height={190}
                        alt='imagen ensalada'
                    />
                </div>
                <div className='absolute right-0 -mt-36 -z-10'>
                    <Image
                        src={'/assets/sallad2.png'}
                        width={180}
                        height={180}
                        alt='imagen ensalada'
                    />
                </div>
            </div>
            <div className='text-center mb-4'>
                <SectionHeaders 
                    subHeader={'Echa un vistaso a nuestro'}
                    mainHeader={'Menu'}
                />
            </div>

            <div className='grid grid-cols-3 gap-4'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </div>
    )
}
