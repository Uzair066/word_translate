import Head from "next/head";
import Top200 from "@/components/top200/top200";

export default function TopWords({ posts }) {
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
        <Top200 top200={posts} />
      </main>
    </>
  );
}
export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.browseword.com/api/top30words?limit=200"
  );
  const posts = await res.json();
  return {
    props: {
      posts: posts || [],
    },
  };
};
