import React from 'react'

import Header from '@/components/Layouts/Header/header'

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={'px-40'}>
            <Header />
            {children}
        </div>
    )
}

export default MainLayout
