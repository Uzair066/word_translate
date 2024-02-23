import Head from "next/head";
import HomeMain from "@/components/Home";

export default function Home({ posts }) {
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
      </Head>
      <main>
        <HomeMain posts={posts} />
      </main>
    </>
  );
}
export const getServerSideProps = async () => {
  const res = await fetch("https://api.browseword.com/api/top30words?limit=28");
  const posts = await res.json();
  return {
    props: {
      posts: posts || [],
    },
  };
};
