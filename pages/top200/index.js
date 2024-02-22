import Head from "next/head";
import Top200 from "@/components/top200/top200";

export default function TopWords({ posts }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Top200 top200={posts} />
      </main>
    </>
  );
}
export const getServerSideProps = async () => {
  const res = await fetch("https://api.browseword.com/api/top30words?limit=200");
  const posts = await res.json();
  return {
    props: {
      posts: posts || [],
    },
  };
};
