import Layout from "@/../components/Layout";
import Loader from "@/../components/Loader";
import "@/styles/globals.css";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import { Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      {loading && <Loader />}
      <div className={sora.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
