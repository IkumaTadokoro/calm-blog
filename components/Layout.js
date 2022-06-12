import Head from "next/head";
import Link from "next/link";
import { Footer } from './footer'
import { Header } from './header'

const siteTitle = "ikuma-t/diary";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
