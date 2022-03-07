import React from 'react'
import Head from 'next/head'
import Header from '../components/Header';
import Response from '../Response';
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults';


const Search = ({ results }) => {

  const router = useRouter();


  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <Header searchTerm={router.query.term} />
      <SearchResults results={results} />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const useDummydata = false;

  const startIndex = context.query.start || '0';
  const data = useDummydata ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json());

  return {
    props: {
      results: data
    }
  }
}
