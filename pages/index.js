import Head from "next/head";
import HomeMain from "@/components/Home";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeMain posts={posts} />
      </main>
    </>
  );
}
export const getServerSideProps = async () => {
  const res = await fetch("https://api.stackaxiom.com/api/top30words");
  const posts = await res.json();
  return {
    props: {
      posts: posts || [],
    },
  };
};
