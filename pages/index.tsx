import Head from 'next/head'
import Image from 'next/image'

import Feed from '../src/components/Feed';
import { ApiFeed } from '../src/types';
import { getStories } from '../src/api';

export interface HomeProps {
  initialStories: ApiFeed;
}

export async function getStaticProps() {
  const data: ApiFeed = await getStories();

  return {
    props: {
      initialStories: data, // will be passed to the page component as props
    }
  }
}

export default function Home({ initialStories }: HomeProps) {
  return (
    <div className="max-w-xl mx-auto py-4">
      <Head>
        <title>Barstool Sports</title>
      </Head>

      <header className="px-4 flex justify-center">
        <Image src="/logo.png" alt="Barstool Sports" width="200" height="64" />
      </header>
      <main>
        <Feed initialStories={initialStories} />
      </main>

      <footer className="flex justify-center items-center w-full py-5 mt-10 border-t border-[#eaeaea]">
        &copy; Barstool Sports
      </footer>
    </div>
  )
}
