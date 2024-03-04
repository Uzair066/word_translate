import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ClearCa = () => {
  const router = useRouter();

  useEffect(() => {
    // Function to force reload the page
    const clearCache = () => {
      const url = `${router.asPath}?timestamp=${new Date().getTime()}`;
      router.push(url);
    };

    // Call the clearCache function when the component mounts
    clearCache();
  }, [router]);

  return (
    <></>
  );
};

export default ClearCa;
