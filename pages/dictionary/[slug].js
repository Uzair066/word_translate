import DictionarySlug from "@/components/dictionary/DictionarySlug";
import Head from "next/head";

function DetailPage({ wordData, slug, loading }) {
  console.log(wordData);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DictionarySlug wordApiData={wordData} slug={slug} loading={loading} />
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
  const res = await fetch(
    `https://api.browseword.com/api/search?word=${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();
  console.log("ddddd", data);
  
  loading = false;
  return {
    props: {
      wordData: data,
      slug: slug,
      loading,
    },
  };
}
