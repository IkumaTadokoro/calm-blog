import Link from "next/link";
import { Container } from "./container"

export const Footer = () => {
  return (
    <footer className="font-bold bg-stone-800 text-white">
      <Container>
        <nav className="py-12">
          <ul className="flex justify-around">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="https://ikuma-t.work">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  )
}
