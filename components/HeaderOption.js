import React from 'react'


const HeaderOption = ({ Icon, title, selected }) => {
    return (
        <div className={`flex items-center space-x-1 option cursor-pointer ${selected &&'selected'}`}>
            <Icon className='h-5' />
            <p className="hidden sm:inline-flex">{title}</p>
        </div>
    )
}

export default HeaderOption