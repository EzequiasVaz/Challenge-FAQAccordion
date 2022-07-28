import type { NextPage } from 'next'
import Head from 'next/head'
import { FAQAccordion } from '../components/FAQAccordion'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FAQ Accordion Card</title>
        <meta name="description" content="FAQ Accordion Card designed by FrontEnd Mentor and coded by Ezequias Vaz" />
      </Head>
      <FAQAccordion />
    </>
  )
}

export default Home
