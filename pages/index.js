import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Avatar from '../components/Avatar'
import { useRef } from 'react';
import { GlobeIcon, MicrophoneIcon, ViewGridIcon, XIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from './../components/Footer';
import Microphone from '../components/Microphone';
import HeaderOption from '../components/HeaderOption';
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,

} from '@heroicons/react/solid'

import Response from '../Response';
import HeaderOptions from '../components/HeaderOptions';

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

       {/* <div className="flex justify-between text-blue-700 max-w-lg mb-10">
            {startIndex >=10 && (
                <Link href={`search?term=${router.query.term}&start=${startIndex + 10}`}>
                    <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>

                        <ChevronLeftIcon className="h-5" />
                        <p>Previous</p>
                    </div>
                </Link>
            )}
            <Link href={`search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
                    <ChevronRightIcon className="h-5" />
                    <p>Next</p>
                </div>
            </Link>
        </div> */}

        {/* <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-48">
            <p className='text-gray-600 text-sm mb-5 mt-3'>About {results.searchInformation?.formattedTotalResults} results in {results.searchInformation?.searchTime} seconds </p>

            {results.items?.map((result) => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group ">
                        <a href={result.link} className="text-sml text-green-900">{result.formattedUrl}</a>
                        <a href={result.link} className="textsml">
                            <h2 className="truncate text-xl text-blue-600 font font-medium group-hover:underline">{result.title}</h2>
                        </a>
                    </div>
                    <p className="line-clamp-3">{result.snippet}</p>
                </div>
            ))}

            <PaginationButtons />
        </div> */}

      {/* <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
          <Image src='/img/google.png' height={40} width={120} className='cursor-pointer' onClick={() => router.push('/')} />
          <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
            <input className='flex-grow w-full focus:outline-none' type="text"
              ref={searchInputRef} />

            <XIcon className='sm:mr-3 h-7 text-gray-500 cursor-pointer transition duration-150 transform hover:scale-110' onClick={() => searchInputRef.current.value = ''} />

            <Microphone />
            <SearchIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 cursor-pointer" onClick={e => search(e)} />
            <button type='submit' hidden onClick={e => search(e)}>Search</button>
          </form>
          <Avatar className="ml-auto" url='https://media-exp1.licdn.com/dms/image/C5603AQFmCdG2twORIg/profile-displayphoto-shrink_800_800/0/1613126213036?e=1651104000&v=beta&t=1CdKUd3muMdSlBdyiwwjAoiOXQ-ZSmbS0t-ejfxDZEU' />

        </div>
        <HeaderOptions />

      </header> */}
      {/* <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-48">
        <p className='text-gray-600 text-sm mb-5 mt-3'>About {results.searchInformation?.formattedTotalResults} results in {results.searchInformation?.searchTime} seconds </p>
      </div> */}




      {/* Body */}

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image src='/img/google.png' height='100' width='300' />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-2 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 stroke-gray-500' />
          <input ref={searchInputRef} type="text" className='focus:outline-none flex-grow' />
          <MicrophoneIcon className='h-5' />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0  sm:flex-row sm:space-x-4'>
          <button className='btn' onClick={search}>Google Search</button>
          <button className='btn' onClick={search}>I'm feeling Lucky</button>
        </div>
      </form>
      {/* Footer */}


      <Footer />
      {/* <footer className='grid w-full divide-y-2 divide-gray-300 bg-gray-100 text-sm text-gray-500 '>
      <div className="px-5 py-3">
        <p>India</p>
      </div>
      <div className=" px-8 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 ">
          <GlobeIcon className="h-5 mr-3 fill-green-700" /> Carbon free since 2007
        </div>
        <div className='flex justify-center space-x-8 whitespace-nowrap md:justify-self-start' >
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works </p>
        </div>
        <div className='flex justify-center space-x-8 md:ml-auto'>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer> */}

    </div>
  )
}
