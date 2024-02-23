import WordMeaning from "../../components/alphabets/WordMeaning";
import Head from "next/head";

function AlphabeticalWord() {
  return (
    <>
      <Head>
      <title>Browseword - Dictionary in Multiple Languages</title>
      <meta name="description" content="Find word meanings from English to your language. Free online dictionary to find word meanings."/>
      <meta name="keywords" content="Free online dictionary"/>
      <meta name="robots" content="index, follow"/>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WordMeaning />
      </main>
    </>
  );
}

export default AlphabeticalWord;
