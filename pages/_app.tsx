import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useEffect } from 'react'
import initTwitterScriptInner from 'zenn-embed-elements/lib/init-twitter-script-inner'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (async() => {
      await import('zenn-embed-elements')
    })()
  })
  return (<>
    <script
      dangerouslySetInnerHTML={{
        __html: initTwitterScriptInner
      }}
    />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  );
}

export default MyApp;
