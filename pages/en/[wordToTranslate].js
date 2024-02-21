import WordTranslate from "@/components/en/WordTranslate";
import axios from "axios";
import Head from "next/head";

function DetailPageTranslation({ engData, wordData, wordToTranslate }) {
  console.log(wordData);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WordTranslate
          wordToTranslate={wordToTranslate}
          englishData={engData}
          wordApiData={wordData}
        />
      </main>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { wordToTranslate } = query;

  const resSearch = await axios.get(
    `https://api.browseword.com/api/search?word=${
      wordToTranslate?.split("-meaning-in-")[0]
    }`
  );

  let englishData = resSearch?.data || null;
  const resDetails = await axios.get(
    `https://api.browseword.com/api/en/${
      wordToTranslate?.split("-meaning-in-")[1] === "urdu"
        ? "english-to-urdu"
        : wordToTranslate?.split("-meaning-in-")[1] === "punjabi"
        ? "english-to-punjabi"
        : wordToTranslate?.split("-meaning-in-")[1] === "hindi"
        ? "english-to-hindi"
        : wordToTranslate?.split("-meaning-in-")[1] === "tamil"
        ? "english-to-tamil"
        : wordToTranslate?.split("-meaning-in-")[1] === "telugu"
        ? "english-to-telugu"
        : wordToTranslate?.split("-meaning-in-")[1] === "bengali"
        ? "english-to-bengali"
        : wordToTranslate?.split("-meaning-in-")[1] === "kannada"
        ? "english-to-kannada"
        : wordToTranslate?.split("-meaning-in-")[1] === "marathi"
        ? "english-to-marathi"
        : wordToTranslate?.split("-meaning-in-")[1] === "malayalam"
        ? "english-to-malayalam"
        : wordToTranslate?.split("-meaning-in-")[1] === "gujarati"
        ? "english-to-gujarati"
        : null
    }?word=${wordToTranslate?.split("-meaning-in-")[0]}`
  );

  let wordApiData = resDetails?.data || null;

  return {
    props: {
      wordToTranslate: wordToTranslate,
      engData: englishData,
      wordData: wordApiData,
    },
  };
}

export default DetailPageTranslation;
