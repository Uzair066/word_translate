import WordTranslate from "@/components/en/WordTranslate";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

function DetailPageTranslation({
  engData,
  wordData,
  wordToTranslate,
  title,
  desc,
}) {
  let splitParts = wordToTranslate?.split("-meaning-in-")[1];

  // Capitalize the first word
  let capitalizedFirstWord =
    splitParts?.charAt(0).toUpperCase() + splitParts?.slice(1);

    const router = useRouter();
    const canonicalUrl = router ? `https://browseword.com${router.asPath}` : "";
  return (
    <>
      <Head>
        <title>{`${
          wordToTranslate?.split("-meaning-in-")[0]
        } Meaning In ${capitalizedFirstWord} - ${
          title ? title : "हिंदी अर्थ"
        } `}</title>
        <meta
          name="description"
          content={`Meaning of ${
            wordToTranslate?.split("-meaning-in-")[0]
          } in ${capitalizedFirstWord} language with definitions, examples, antonym, synonym. ${
            desc ? desc : "हिंदी में अर्थ पढ़ें"
          }.`}
        />
        <meta
          name="keywords"
          content={wordToTranslate?.split("-meaning-in-")[0]}
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href={canonicalUrl} />
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

  const resSearch = await fetch(
    `https://api.browseword.com/api/search?word=${
      wordToTranslate?.split("-meaning-in-")[0]
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let englishData = await resSearch.json();
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
  const title =
    wordToTranslate?.split("-meaning-in-")[1] === "hindi "
      ? "हिंदी अर्थ"
      : wordToTranslate?.split("-meaning-in-")[1] === "punjabi "
      ? "ਪੰਜਾਬੀ ਦਾ ਮਤਲਬ"
      : wordToTranslate?.split("-meaning-in-")[1] === "urdu "
      ? "اردو معنی"
      : wordToTranslate?.split("-meaning-in-")[1] === "malayalam "
      ? "മലയാളം അർത്ഥം"
      : wordToTranslate?.split("-meaning-in-")[1] === "gujarati"
      ? "ગુજરાતી અર્થ"
      : wordToTranslate?.split("-meaning-in-")[1] === "kannada"
      ? "ಕನ್ನಡ ಅರ್ಥ"
      : wordToTranslate?.split("-meaning-in-")[1] === "marathi"
      ? "मराठी अर्थ"
      : wordToTranslate?.split("-meaning-in-")[1] === "tamil"
      ? "தமிழ் அர்த்தம்"
      : wordToTranslate?.split("-meaning-in-")[1] === "bengali"
      ? "বাংলা অর্থ"
      : wordToTranslate?.split("-meaning-in-")[1] === "telugu"
      ? "తెలుగు అర్థం"
      : null;

  const desc =
    wordToTranslate?.split("-meaning-in-")[1] === "hindi "
      ? "हिंदी में अर्थ पढ़ें."
      : wordToTranslate?.split("-meaning-in-")[1] === "punjabi "
      ? "ਪੰਜਾਬੀ ਵਿੱਚ ਅਰਥ ਪੜ੍ਹੋ।"
      : wordToTranslate?.split("-meaning-in-")[1] === "urdu "
      ? "اردو میں معنی پڑھیں۔"
      : wordToTranslate?.split("-meaning-in-")[1] === "malayalam "
      ? "മലയാളത്തിൽ അർത്ഥം വായിക്കുക."
      : wordToTranslate?.split("-meaning-in-")[1] === "gujarati"
      ? "ગુજરાતીમાં અર્થ વાંચો"
      : wordToTranslate?.split("-meaning-in-")[1] === "kannada"
      ? "ಕನ್ನಡದಲ್ಲಿ ಅರ್ಥವನ್ನು ಓದಿ"
      : wordToTranslate?.split("-meaning-in-")[1] === "marathi"
      ? "मराठीत अर्थ वाचा"
      : wordToTranslate?.split("-meaning-in-")[1] === "tamil"
      ? "தமிழில் அர்த்தம் படிக்கவும்"
      : wordToTranslate?.split("-meaning-in-")[1] === "bengali"
      ? "বাংলায় অর্থ পড়ুন"
      : wordToTranslate?.split("-meaning-in-")[1] === "telugu"
      ? "తెలుగులో అర్థం చదవండి"
      : null;
  return {
    props: {
      wordToTranslate: wordToTranslate,
      engData: !!englishData ? englishData : null,
      wordData: wordApiData,
      title,
      desc,
    },
  };
}

export default DetailPageTranslation;
