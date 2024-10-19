import React from 'react'
import Link from 'next/link'

const HeaderLinks: React.FC = () => {
    return (
        <div className="flex items-center gap-[34px]">
            <Link
                href="/"
                className="text-[13px] uppercase text-white font-bold tracking-[2px]"
            >
                Home
            </Link>
            <Link
                href="/"
                className="text-[13px] uppercase text-white font-bold tracking-[2px]"
            >
                HeadPhones
            </Link>
            <Link
                href="/"
                className="text-[13px] uppercase text-white font-bold tracking-[2px]"
            >
                Speakers
            </Link>
            <Link
                href="/"
                className="text-[13px] uppercase text-white font-bold tracking-[2px]"
            >
                Earphones
            </Link>
        </div>
    )
}

export default HeaderLinks
