import Head from "next/head";
import About from "@/components/about/about";

export default function TopWords() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <About />
      </main>
    </>
  );
}

