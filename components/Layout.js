import Head from "next/head";
import { Footer } from './footer'
import { Header } from './header'

const siteTitle = "ikuma-t/diary";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <main className="flex-1 py-8">{children}</main>
      <Footer />
    </div>
  );
}
