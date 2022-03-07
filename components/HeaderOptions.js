import React from 'react'
import HeaderOption from './HeaderOption'
import {
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon,
} from '@heroicons/react/solid'

const HeaderOptions = () => {
    return (
        <div className="header-options">
            <div className="header-option">
                <HeaderOption Icon={SearchIcon} title='All' selected />
                <HeaderOption Icon={PhotographIcon} title='Images'/>
                <HeaderOption Icon={PlayIcon} title='Videos'/>
                <HeaderOption Icon={NewspaperIcon} title='News'/>
                <HeaderOption Icon={MapIcon} title='Maps'/>
                <HeaderOption Icon={DotsVerticalIcon} title='More'/>
            </div>
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions