import React, { useRef } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { XIcon, SearchIcon } from '@heroicons/react/solid';
import Microphone from './Microphone';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';


const Header = ({ searchTerm }) => {

    const router = useRouter();

    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();

        const term = searchInputRef.current.value;
        if (!term) return;

        router.push(`/search/?term=${term}`)

    }


    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image src='/img/google.png' height={40} width={120} className='cursor-pointer' onClick={() => router.push('/')} />
                <form className='flex flex-grow px-6 py-2 ml-10 mr-5 border border-gray-200 rounded-full focus-within:shadow-lg max-w-3xl items-center'>
                    <input className='flex-grow w-full focus:outline-none' type="text"
                        ref={searchInputRef} defaultValue={searchTerm} />
                    {/* add ref to the input */}

                    <XIcon className='sm:mr-3 h-7 text-gray-500 cursor-pointer transition duration-150 transform hover:scale-110' onClick={() => searchInputRef.current.value = ''} />

                    <Microphone className='border-l-2' />
                    {/* <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500" /> */}
                    <SearchIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 cursor-pointer" onClick={e => search(e)} />
                    <button type='submit' hidden onClick={e => search(e)}>Search</button>
                </form>
                <Avatar className="ml-auto" url='https://media-exp1.licdn.com/dms/image/C5603AQFmCdG2twORIg/profile-displayphoto-shrink_800_800/0/1613126213036?e=1651104000&v=beta&t=1CdKUd3muMdSlBdyiwwjAoiOXQ-ZSmbS0t-ejfxDZEU' />

            </div>
            <HeaderOptions />

        </header>
    )
}

export default Header