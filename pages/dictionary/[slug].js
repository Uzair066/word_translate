import DictionarySlug from "@/components/dictionary/DictionarySlug";
import Head from "next/head";
import { useRouter } from "next/router";

function DetailPage({ wordData, slug, loading }) {
  const router = useRouter();
  const canonicalUrl = router ? `https://browseword.com${router.asPath}` : "";
  return (
    <>
      <Head>
      <title>Browseword - Dictionary in Multiple Languages</title>
        <meta
          name="description"
          content="Find word meanings from English to your language. Free online dictionary to find word meanings."
        />
        <meta name="keywords" content="Free online dictionary" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
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
