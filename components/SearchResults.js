import Link from 'next/link'
import React from 'react'
import PaginationButtons from './PaginationButtons';

const SearchResults = ({ results }) => {

    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-48">
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
        </div>
    )
}

export default SearchResults