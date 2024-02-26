import PageDefault from "@/components/DefaultPage/slug";
import Head from "next/head";

function DefaultSlug() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageDefault />
      </main>
    </>
  );
}

export default DefaultSlug;
