import React from 'react'

import CartIcon from '@/icons/cart-icon'
import AudiophileLogo from '@/icons/audiophile-logo'
import HeaderLinks from '@/components/Layouts/Header/header-links'

const Header: React.FC = () => {
    return (
        <header
            className={
                'border-b border-b-white border-opacity-20 py-9 flex justify-between items-center'
            }
        >
            <AudiophileLogo />
            <HeaderLinks />
            <CartIcon />
        </header>
    )
}

export default Header
