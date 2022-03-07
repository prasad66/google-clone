import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Avatar from '../components/Avatar'
import { useRef } from 'react';
import { GlobeIcon, MicrophoneIcon, ViewGridIcon, XIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from './../components/Footer';
import Microphone from '../components/Microphone';

export default function Home() {


  const router = new useRouter();

  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`)

  }


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Clone of Google Search Engine by Prasad N" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <header className=" flex p-3 w-full justify-between text-sm text-gray-700">

        <div className="flex space-x-4 items-center">
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url='https://media-exp1.licdn.com/dms/image/C5603AQFmCdG2twORIg/profile-displayphoto-shrink_800_800/0/1613126213036?e=1651104000&v=beta&t=1CdKUd3muMdSlBdyiwwjAoiOXQ-ZSmbS0t-ejfxDZEU' />


        </div>

      </header>

      
      {/* Body */}

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image src='/img/google.png' height='100' width='300' />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-2 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 stroke-gray-500' />
          <input ref={searchInputRef} type="text" className='focus:outline-none flex-grow' />
          {/* <MicrophoneIcon className='h-5' /> */}
          <Microphone className='h-5 m-0'/>
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0  sm:flex-row sm:space-x-4'>
          <button className='btn' onClick={search}>Google Search</button>
          <button className='btn' onClick={search}>I'm feeling Lucky</button>
        </div>
      </form>
      {/* Footer */}


      <Footer />
     

    </div>
  )
}
