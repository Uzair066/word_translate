import Head from "next/head";
import Err404 from "@/components/404/404";
import { useRouter } from "next/router";

export default function Er404() {
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
        <Err404 />
      </main>
    </>
  );
}
