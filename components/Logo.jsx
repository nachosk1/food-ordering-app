import Image from 'next/image'
import React from 'react'

export default function Logo({ width = 30, height = 30 }) {
    return (
        <div>
            <Image
                src={'/assets/logo.jpg'}
                width={width}
                height={height}
                alt='imagen logotipo'
                priority={true}
            />
        </div>
    )
}
