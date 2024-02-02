import WordMeaning from "../../components/alphabets/WordMeaning";
import Head from "next/head";

function AlphabeticalWord() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WordMeaning />
      </main>
    </>
  );
}

export default AlphabeticalWord;
