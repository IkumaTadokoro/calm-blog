import Link from "next/link";
import { Container } from "./container"

export const Footer = () => {
  return (
    <footer className="font-bold border-t-2 border-slate-100">
      <Container>
        <nav className="py-12">
          <ul className="flex justify-around text-white">
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
