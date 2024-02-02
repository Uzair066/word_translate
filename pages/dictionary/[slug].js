import DictionarySlug from "@/components/dictionary/DictionarySlug";
import Head from "next/head";

function DetailPage({ wordData, slug, loading }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DictionarySlug wordData={wordData} slug={slug} loading={loading} />
      </main>
    </>
  );
}

export default DetailPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  let loading = true;
  // Fetch data from the server
  const res = await fetch(`https://api.stackaxiom.com/api/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ word: slug }),
  });

  const data = await res.json();
  loading = false;
  return {
    props: {
      wordData: data,
      slug: slug,
      loading,
    },
  };
}
