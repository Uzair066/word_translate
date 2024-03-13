import PageDefault from "@/components/DefaultPage/slug";
import TranslateSentence from "@/components/sentence/TranslateSentence";
import Head from "next/head";
import { useRouter } from "next/router";

function DefaultSentence({title, htmlData}) {
  let splitParts = title?.split("-")[0];

  // Capitalize the first word
  let capitalizedFirstWord = splitParts?.charAt(0).toUpperCase() + splitParts?.slice(1);
  let splitword = title?.split("-")[2];
    let capitalizedSecondWord = splitword?.charAt(0).toUpperCase() + splitword?.slice(1);
    const router = useRouter();
    const canonicalUrl = router ? `https://browseword.com${router.asPath}` : "";
  return (
    <>
      <Head>
      <title>{`Browseword - ${capitalizedFirstWord} To ${capitalizedSecondWord} Translation | Online Converter`}</title>
        <meta
          name="description"
          content={`Use our free online ${capitalizedFirstWord} to ${capitalizedSecondWord} translator, Just paste your ${capitalizedFirstWord} text into the text field and translate it into ${capitalizedSecondWord}.`}
        />
        <meta name="keywords" content="Free online dictionary" />
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
        <TranslateSentence htmlData={htmlData}/>
      </main>
    </>
  );
}
export async function getServerSideProps({ query }) {
  const { slug } = query;


  const title =slug

  const resSearch = await fetch(
    `http://localhost:3000/api/translator/${
      slug
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let htmlData = await resSearch.json();
  console.log(htmlData);
  return {
    props: {
      title,
      htmlData
    },
  };
}

export default DefaultSentence;
