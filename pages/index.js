import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  async function apiTest() {
    const res = await fetch("https://p1ojmprnji.execute-api.eu-north-1.amazonaws.com/TestStage/my-test");
    console.log("res console", await res.json());
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">
        Hello world! I love tailwindcss
        <button onClick={apiTest}>
          API CALL
        </button>
      </h1>
    </div>
  )
}
