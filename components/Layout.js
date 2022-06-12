import Head from "next/head";
import Link from "next/link";
import { Footer } from './footer'

const siteTitle = "ikuma-t/diary";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <nav>
          <p>
            <Link href="/">
              <a>{siteTitle}</a>
            </Link>
          </p>
        </nav>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
